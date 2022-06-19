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

export default BloodTestList;
