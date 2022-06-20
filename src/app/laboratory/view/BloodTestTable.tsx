import { BloodTest } from "../domain/BloodTestEntity";
import TranslateRisk from "./TranslateRisk";

const BloodTestTable = ({ bloodTests }: { bloodTests: BloodTest[] }) => {
  return (
    <table id="table-blood-tests" width="100%">
      <thead>
        <tr>
          <th>Núm. de Identificación</th>
          <th>Azúcar</th>
          <th>Grasa</th>
          <th>Oxígeno</th>
          <th>Nivel de Riesgo</th>
        </tr>
      </thead>
      <tbody>
        {bloodTests?.map(({ idNumber, sugar, fat, oxygen, risk }, index) => (
          <tr>
            <td align="center" key={`${idNumber}-${index}-idNumber`}>
              {idNumber}
            </td>
            <td align="left" key={`${idNumber}-${index}-sugar`}>
              {sugar}%
            </td>
            <td align="left" key={`${idNumber}-${index}-fat`}>
              {fat}%
            </td>
            <td align="left" key={`${idNumber}-${index}-oxygen`}>
              {oxygen}%
            </td>
            <td align="center" key={`${idNumber}-${index}-risk`}>
              <TranslateRisk risk={risk} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BloodTestTable;
