import { AppError } from "../../../../shared/errors/AppError";
import { CostCentersRepositoryInMemory } from "../../repositories/in-memory/CostCentersRepositoryInMemory";
import { CreateCostCenterService } from "./CreateCostCenterService";

let costCenterRepositoyInMemory: CostCentersRepositoryInMemory;
let createCostCenterService: CreateCostCenterService;

describe("Create Cost Center", () => {
  beforeAll(() => {
    costCenterRepositoyInMemory = new CostCentersRepositoryInMemory();
    createCostCenterService = new CreateCostCenterService(
      costCenterRepositoyInMemory
    );
  });

  it("should be able to create a new cost center", async () => {
    const costCenter = await createCostCenterService.execute({
      number: 1,
      responsible: "Cecilia Luna",
      description: "Gocaoge",
    });

    expect(costCenter).toHaveProperty("id");
  });

  it("should not be able to create cost center with the same name", () => {
    expect(async () => {
      await createCostCenterService.execute({
        number: 1,
        responsible: "ERRO",
        description: "ERRO",
      });

      await createCostCenterService.execute({
        number: 1,
        responsible: "ERRO",
        description: "ERRO",
      });
    }).rejects.toEqual(new AppError("Cost center already exists!"));
  });
});
