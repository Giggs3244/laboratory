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
  const { bloodTests } = useBloodTestController(store);
  // return bloodTests.map((bloodTest) => (
  //   <div
  //     key={bloodTest.idNumber}
  //   >{`${bloodTest.idNumber} - ${bloodTest.sugar}`}</div>
  // ));
  return <BloodTestList bloodTests={bloodTests} />;
}

export default BloodTestView;
