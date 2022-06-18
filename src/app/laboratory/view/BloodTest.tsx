import { useBloodTestController } from "../controller/useBloodTestController";
import { useBloodTestStoreImplementation } from "../data/BloodTestStoreImpl";
import { BloodTest } from "../domain/BloodTestEntity";

const BloodTestList = ({ bloodTests }: { bloodTests: BloodTest[] }) => (
  <>
    {bloodTests.map((bloodTest) => (
      <div
        key={bloodTest.idNumber}
      >{`${bloodTest.idNumber} - ${bloodTest.sugar}`}</div>
    ))}
  </>
);

function BloodTestView() {
  const store = useBloodTestStoreImplementation();
  const { bloodTests, addBloodTest } = useBloodTestController(store);
  return (
    <>
      <BloodTestList bloodTests={bloodTests} />
      <button
        id="button-blood-test-validate-blood"
        onClick={() =>
          addBloodTest({ idNumber: "1002", oxygen: 2, fat: 2, sugar: 2 })
        }
      >
        Validar muestra de sangre
      </button>
    </>
  );
}

export default BloodTestView;
