import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { CreateProductService } from "../createProduct/CreateProductService";
import { ListProductsService } from "./ListProductsService";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createCategoryService: CreateCategoryService;
let createProductsService: CreateProductService;
let listProductsService: ListProductsService;

describe("List Products", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
    createProductsService = new CreateProductService(
      productsRepositoryInMemory,
      categoriesRepositoryInMemory
    );
    listProductsService = new ListProductsService(productsRepositoryInMemory);
  });
  it("should be able to list products", async () => {
    const category = await createCategoryService.execute({
      name: "Limpeza",
      description: "Produto para ser usado na limpeza",
    });

    await createProductsService.execute({
      name: "Desinfetante",
      category_id: category.id,
      amount: 10,
    });

    const products = await listProductsService.execute();

    expect(products.length).toEqual(1);
  });
});
