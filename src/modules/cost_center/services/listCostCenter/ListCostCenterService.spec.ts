import { CostCentersRepositoryInMemory } from "../../repositories/in-memory/CostCentersRepositoryInMemory";
import { CreateCostCenterService } from "../createCostCenter/CreateCostCenterService";
import { ListCostCenterService } from "./ListCostCenterService";

let costCenterRepositoryInMemory: CostCentersRepositoryInMemory;
let createCostCenterService: CreateCostCenterService;
let listCostCenterService: ListCostCenterService;

describe("List Cost Center", () => {
  beforeAll(() => {
    costCenterRepositoryInMemory = new CostCentersRepositoryInMemory();
    createCostCenterService = new CreateCostCenterService(
      costCenterRepositoryInMemory
    );
    listCostCenterService = new ListCostCenterService(
      costCenterRepositoryInMemory
    );
  });

  it("should be able to list cost centers", async () => {
    await createCostCenterService.execute({
      number: 1,
      description: "Test",
      responsible: "IGOR",
    });

    const list = await listCostCenterService.execute(0);

    expect(list.length).toEqual(1);
    expect(list[0]).toHaveProperty("id");
  });
});
