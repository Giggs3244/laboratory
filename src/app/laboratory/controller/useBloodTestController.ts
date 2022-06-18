import { BloodTestStore } from "../domain/BloodTestStore";

function useBloodTestController(store: BloodTestStore) {
  return {
    bloodTests: store.bloodTests
  }
}

export { useBloodTestController };