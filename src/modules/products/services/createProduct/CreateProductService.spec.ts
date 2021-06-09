import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { CreateProductService } from "./CreateProductService";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let createProductService: CreateProductService;

describe("Create Product", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
    createProductService = new CreateProductService(
      productsRepositoryInMemory,
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new product", async () => {
    const category = await createCategoryService.execute({
      name: "Limpeza",
      description: "Produto para ser usado na limpeza",
    });

    const product = {
      name: "Água Sanitária",
      category_id: category.id,
      amount: 10,
    };

    const createdProduct = await createProductService.execute({
      name: product.name,
      category_id: product.category_id,
      amount: product.amount,
    });

    expect(createdProduct).toHaveProperty("id");
    expect(createdProduct.active).toEqual(true);
  });

  it("should not be able to create product with non-existing category", () => {
    expect(async () => {
      const product = {
        name: "Água Sanitária",
        category_id: "fail",
        amount: 10,
      };

      await createProductService.execute({
        name: product.name,
        category_id: product.category_id,
        amount: product.amount,
      });
    }).rejects.toEqual(new AppError("Category does not exist!"));
  });

  it("should not be able to create product with the same name", () => {
    expect(async () => {
      const category = await createCategoryService.execute({
        name: "Limpeza2",
        description: "Produto para ser usado na limpeza2",
      });

      const product = {
        name: "Água Sanitária test",
        category_id: category.id,
        amount: 10,
      };

      await createProductService.execute({
        name: product.name,
        category_id: product.category_id,
        amount: product.amount,
      });

      await createProductService.execute({
        name: product.name,
        category_id: product.category_id,
        amount: product.amount,
      });
    }).rejects.toEqual(new AppError("Product already Exists!"));
  });
});
