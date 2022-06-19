import { useEffect, useState } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { useFilterBloodTestController } from "../controller/useFilterBloodTestController";
import { useBloodTestStoreImplementation } from "../data/BloodTestStoreImpl";
import { BloodTest } from "../domain/BloodTestEntity";
import "./BloodTestList.css";
import TranslateRisk from "./TranslateRisk";

const BloodTestList = () => {
  const store = useBloodTestStoreImplementation();
  const { bloodTests, filterBloodTest } = useFilterBloodTestController(store);
  const [searchTest, setSearchTest] = useState("");
  const [localBloodTests, setLocalBloodTests] = useState<BloodTest[]>();

  useEffect(() => {
    setLocalBloodTests(bloodTests);
  }, [bloodTests]);

  const handleChangeSearch = (value: string) => {
    setSearchTest(value === "" ? "0" : value);
  };

  const handleSearch = () => {
    setLocalBloodTests(filterBloodTest(searchTest));
  };

  return (
    <article className="bloodtest-list">
      <div className="bloodtest-list__search">
        <Input
          id="blood-test-search"
          name="searchText"
          pattern="[0-9]*"
          value={searchTest}
          labelText="Filtrar por número de identificación"
          maxLength={15}
          onChange={handleChangeSearch}
        />
        <Button
          id="button-blood-test-search"
          // className="button-blood-test"
          text="Validar muestra de sangre"
          isDisabled={!searchTest}
          onClick={handleSearch}
        />
      </div>
      <div className="bloodtest-list__content">
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
            {localBloodTests?.map(
              ({ idNumber, sugar, fat, oxygen, risk }, index) => (
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
              )
            )}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default BloodTestList;
