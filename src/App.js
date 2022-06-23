import { useEffect, useState } from "react";
import data from "./components/data/data";
import StyledBudget from "./styles/styles";

function App() {
  const [budget, setbudget] = useState({});
  const [totalBudget, setTotalBudget] = useState(0);

  const handleBudget = (state) => {
    const { name, value, checked } = state.target;
    setbudget({
      ...budget,
      [name]: { checked: checked, price: parseInt(value) },
    });
  };
  const handlePanel = (e, parent) => {
    const { name, value } = e.target;
    setbudget({ ...budget, [parent]: { [name]: parseInt(value) } });
  };

  // Exercise 1
  useEffect(() => {
    let total = 0;
    const panel = data.webPage.numPage * data.webPage.numLang * 30;
    for (let checkbox in budget) {
      if (budget[checkbox].checked) {
        total += budget[checkbox].price;
      }
    }

    setTotalBudget(data.webPage.checked ? total + panel : total);
  }, [budget]);
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
