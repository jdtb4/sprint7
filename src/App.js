import { useEffect, useState } from "react";

function App() {
  const [presupuesto, setPresupuesto] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePresupuesto = (e) => {
    const { name, value, checked } = e.target;
    setPresupuesto({
      ...presupuesto,
      [name]: { checked: checked, price: parseInt(value) },
    });
  };
  useEffect(() => {
    let total = 0;
    for (let key in presupuesto) {
      if (presupuesto[key].checked) {
        total += presupuesto[key].price;
      }
    }
    setTotalPrice(total);
  }, [presupuesto]);

  return (
    <>
      <p>¿Qué quieres hacer?</p>
      <p>
        <input
          type="checkbox"
          name="web-page"
          value="500"
          onChange={handlePresupuesto}
        ></input>
        ¿Una página web? (500€)
      </p>
      <p>
        <input
          type="checkbox"
          name="seo-consulting"
          value="300"
          onChange={handlePresupuesto}
        ></input>
        ¿Un consultoría SEO? (300€)
      </p>
      <p>
        <input
          type="checkbox"
          name="google-ads-consulting"
          value="200"
          onChange={handlePresupuesto}
        ></input>
        ¿Una campaña de Google Ads? (200€)
      </p>
      <p>Precio: {totalPrice}€ </p>
    </>
  );
}

export default App;
