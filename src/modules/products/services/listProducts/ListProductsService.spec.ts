import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "../createProduct/CreateProductService";
import { ListProductsService } from "./ListProductsService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductsService: CreateProductService;
let listProductsService: ListProductsService;

describe("List Products", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductsService = new CreateProductService(
      productsRepositoryInMemory
    );
    listProductsService = new ListProductsService(productsRepositoryInMemory);
  });
  it("should be able to list products", async () => {
    await createProductsService.execute({
      name: "Desinfetante",
      category_id: "d439e470-5c5d-47dd-96e7-32711208340a",
      amount: 10,
    });

    const products = await listProductsService.execute();

    expect(products.length).toEqual(1);
  });
});
