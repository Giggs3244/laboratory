import { useSelector } from "react-redux";
import { AppRootState } from "../../main/data/appStore";
import { BloodTestStore } from "../domain/BloodTestStore";
import { BloodTestState } from "./BloodTestSlice";

const bloodTestSelector = (state: AppRootState) => state.bloodTest;

const useBloodTestStoreImplementation = (): BloodTestStore => {
  const { bloodTests } = useSelector(bloodTestSelector);

  return {
    bloodTests
  };
};

export { useBloodTestStoreImplementation };