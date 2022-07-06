import { useEffect, useState } from "react";
import data from "./components/Data/Data";
import Panel from "./components/Panel/Panel";
import { StyledBudget } from "./Styles/Styles";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [budget, setbudget] = useState({});
  const [totalBudget, setTotalBudget] = useState(0);
  const [sumaValor, setSumaValor] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [joined, setJoined] = useState(true);

  const handleBudget = (state) => {
    const { name, value, checked } = state.target;
    setbudget({
      ...budget,
      [name]: { checked: checked, price: parseInt(value) },
    });
    if (name === "webPage") {
      setIsChecked(checked);
    }
  };

  // Exercise 1
  useEffect(() => {
    let total = 0;
    for (let checkbox in budget) {
      if (budget[checkbox].checked) {
        total += budget[checkbox].price;
      }
    }
    setTotalBudget(total);
  }, [budget]);
  return (
    <>
      <Welcome joined={joined} setJoined={setJoined} />
      {joined ? null : (
        <StyledBudget>
          <p>¿Qué quieres hacer?</p>
          <p>
            <input
              type="checkbox"
              name="webPage"
              value={data.webPage.price}
              onChange={handleBudget}
            ></input>
            ¿Una página web? (500€)
          </p>
          {isChecked && (
            <Panel
              setSumaValor={setSumaValor}
              totalBudget={totalBudget}
              setTotalBudget={setTotalBudget}
            />
          )}
          <p>
            <input
              type="checkbox"
              name="seoConsulting"
              value={data.seoConsulting.price}
              onChange={handleBudget}
            ></input>
            ¿Un consultoría SEO? (300€)
          </p>
          <p>
            <input
              type="checkbox"
              name="googleAdsConsulting"
              value={data.googleAdsConsulting.price}
              onChange={handleBudget}
            ></input>
            ¿Una campaña de Google Ads? (200€)
          </p>
          <p className="budgetPrice">
            Precio: {sumaValor > 0 ? sumaValor : totalBudget}€{" "}
          </p>
        </StyledBudget>
      )}
    </>
  );
}

export default App;
