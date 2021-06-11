import { AppError } from "../../../../shared/errors/AppError";
import { CostCentersRepositoryInMemory } from "../../repositories/in-memory/CostCentersRepositoryInMemory";
import { CreateCostCenterService } from "../createCostCenter/CreateCostCenterService";
import { UpdateCostCenterService } from "./UpdateCostCenterService";

let costCenterRepositoryInMemory: CostCentersRepositoryInMemory;
let createCostCenterService: CreateCostCenterService;
let updateCostCenterService: UpdateCostCenterService;

describe("Update Cost Center", () => {
  beforeAll(() => {
    costCenterRepositoryInMemory = new CostCentersRepositoryInMemory();
    createCostCenterService = new CreateCostCenterService(
      costCenterRepositoryInMemory
    );
    updateCostCenterService = new UpdateCostCenterService(
      costCenterRepositoryInMemory
    );
  });

  it("should be able to update cost center", async () => {
    const costCenter = await createCostCenterService.execute({
      number: 100,
      description: "Teste",
      responsible: "IGOR",
    });

    const updatedCostCenter = await updateCostCenterService.execute({
      id: costCenter.id,
      number: 101,
      description: "Teste Update",
      responsible: "IGOR",
    });

    expect(updatedCostCenter.number).toEqual(101);
    expect(updatedCostCenter.description).toEqual("Teste Update");
  });

  it("should not be able to update cost center non existing", () => {
    expect(async () => {
      await updateCostCenterService.execute({
        id: "FAKE",
        number: 101,
        description: "Teste Update",
        responsible: "IGOR",
      });
    }).rejects.toEqual(new AppError("Cost Center does not exists!"));
  });
});
