import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category name test",
      description: "Category description test",
    };

    const categoryCreate = await createCategoryService.execute({
      name: category.name,
      description: category.description,
    });

    expect(categoryCreate).toHaveProperty("id");
  });

  it("should not be possible to create categories with the same name", () => {
    expect(async () => {
      const category = {
        name: "Category name test",
        description: "Category description test",
      };

      await createCategoryService.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryService.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryService.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toEqual(new AppError("Category already exists!"));
  });
});
