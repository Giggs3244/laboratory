import { Provider } from "react-redux";
import BloodTestView from "../../laboratory/view/BloodTest";
import Card from "../../shared/components/Card";
import { store } from "../data/appStore";
import "./App.css";

function AppProvider() {
  return (
    <Provider store={store}>
      <main className="laboratory">
        <h1 className="laboratory__heading">Laboratorio S.A.</h1>
        <section className="laboratory__content">
          <Card
            id="blood-test-form"
            title="Tomar muestra de sangre"
            subtitle="Diligencie el formulario para consultar el nivel de riesgo de un paciente"
          >
            <BloodTestView />
          </Card>
          <Card
            id="blood-test-filter-tests"
            title="Filtrar muestra de sangre realizadas"
            subtitle="Diligencie el número de identificación para consultar el nivel de riesgo de un paciente"
          >
            {/* <BloodTestList /> */}
          </Card>
        </section>
      </main>
    </Provider>
  );
}

export default AppProvider;