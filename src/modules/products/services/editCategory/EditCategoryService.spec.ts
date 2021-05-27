import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { EditCategoryService } from "./EditCategoryService";

let createCategoryService: CreateCategoryService;
let editCategoryService: EditCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Edit Category", () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryService = new CreateCategoryService(
      categoriesRepositoryInMemory
    );
    editCategoryService = new EditCategoryService(categoriesRepositoryInMemory);
  });

  it("should be able to edit a category", async () => {
    const category = {
      name: "Category name test",
      description: "Category description test",
    };

    const categoryCreate = await createCategoryService.execute({
      name: category.name,
      description: category.description,
    });

    const categoryEdit = await editCategoryService.execute({
      id: categoryCreate.id,
      name: "Category name edit",
      description: "Category description edit",
    });

    expect(categoryEdit.name).toEqual("Category name edit");
    expect(categoryEdit.description).toEqual("Category description edit");
  });

  it("should not be able to edit a category", async () => {
    expect(async () => {
      const fakeId = "123456";

      await editCategoryService.execute({
        id: fakeId,
        name: "Category name edit2",
        description: "Category description edit2",
      });
    }).rejects.toEqual(new AppError("Category isn't already exists"));
  });
});
