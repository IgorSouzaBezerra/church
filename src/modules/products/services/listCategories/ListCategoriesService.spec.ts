import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { ListCategoriesService } from "./ListCategoriesService";

let createCategoryService: CreateCategoryService;
let listCategoriesService: ListCategoriesService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("List Categories", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    listCategoriesService = new ListCategoriesService(
      categoriesRepositoryInMemory
    );
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
  });
  it("should be able to list a categories", async () => {
    await createCategoryService.execute({
      name: "Category 1",
      description: "Category 1",
    });

    const categories = await listCategoriesService.execute();

    expect(categories.length).toEqual(1);
  });
});
