import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductService } from "./CreateProductService";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductService: CreateProductService;

describe("Create Product", () => {
  beforeAll(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductService = new CreateProductService(productsRepositoryInMemory);
  });

  it("should be able to create a new product", async () => {
    const product = {
      name: "Água Sanitária",
      category_id: "category_id",
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
});
