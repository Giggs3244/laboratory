import { BloodTest } from "../domain/BloodTestEntity";
import { BloodTestStore } from "../domain/BloodTestStore";

type AddBloodTestStore = Pick<BloodTestStore, "addBloodTest">;

const addBloodTestUseCase = (
  store: AddBloodTestStore,
  bloodTest: BloodTest
) => {
  return store.addBloodTest(bloodTest);
};

export { addBloodTestUseCase };
