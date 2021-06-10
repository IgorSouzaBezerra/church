import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { CreateProductService } from "../createProduct/CreateProductService";
import { UpdateProductService } from "./UpdateProductService";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let createProductService: CreateProductService;
let updateProductService: UpdateProductService;

describe("Update Product", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
    createProductService = new CreateProductService(
      productsRepositoryInMemory,
      categoriesRepositoryInMemory
    );
    updateProductService = new UpdateProductService(productsRepositoryInMemory);
  });

  it("should be able to update product", async () => {
    const category = await createCategoryService.execute({
      name: "Limpeza",
      description: "Limpeza",
    });

    const category2 = await createCategoryService.execute({
      name: "Limpeza 2",
      description: "Limpeza 2",
    });

    const product = await createProductService.execute({
      name: "Detergente",
      category_id: category.id,
      amount: 10,
    });

    const updatedProduct = await updateProductService.execute({
      id: product.id,
      name: "Detergente 2",
      active: false,
      amount: 15,
      category_id: category2.id,
    });

    expect(updatedProduct.id).toEqual(product.id);
    expect(updatedProduct.name).toEqual("Detergente 2");
    expect(updatedProduct.active).toEqual(false);
    expect(updatedProduct.category_id).toEqual(category2.id);
  });

  it("should not be able to update product does not exist", () => {
    expect(async () => {
      await updateProductService.execute({
        id: "fake",
        name: "Detergente 2",
        active: false,
        amount: 15,
        category_id: "fake",
      });
    }).rejects.toEqual(new AppError("Product does not exists!"));
  });

  it("should not be able to update the product with the same name", () => {
    expect(async () => {
      const category = await createCategoryService.execute({
        name: "Cozinha",
        description: "Cozinha",
      });

      const product1 = await createProductService.execute({
        name: "Panela",
        category_id: category.id,
        amount: 10,
      });

      const product2 = await createProductService.execute({
        name: "Tampa",
        category_id: category.id,
        amount: 10,
      });

      await updateProductService.execute({
        id: product1.id,
        name: product2.name,
        active: false,
        amount: 15,
        category_id: category.id,
      });
    }).rejects.toEqual(new AppError("Product Already exists!"));
  });
});
