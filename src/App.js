import { useEffect, useState } from "react";
import data from "./components/Data/Data";
import StyledBudget from "./styles/styles";
import Panel from "./components/Panel/Panel";
//import Welcome from "./components/Welcome/Welcome";

function App() {
  const [budget, setbudget] = useState({});
  const [totalBudget, setTotalBudget] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

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
    localStorage.setItem("totalBudget", total);
  }, [budget]);

  /*useEffect(() => {
    const getBudgetLocalStorage = () => {
      const budgetLocalStorage =
        JSON.parse(localStorage.getItem("budget")) ?? [];
      setbudget(budgetLocalStorage);
    };
    getBudgetLocalStorage(),
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);*/

  console.log(totalBudget); // Total del presupuesto
  return (
    <>
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
          <Panel totalBudget={totalBudget} setTotalBudget={setTotalBudget} />
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
        <p>Precio: {totalBudget}€ </p>
      </StyledBudget>
    </>
  );
}

export default App;
