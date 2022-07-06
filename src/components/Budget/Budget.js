import { StyledBudget } from "../../Styles/Styles";
import data from "../Data/Data";
import Panel from "../Panel/Panel";
const Budget = (handleBudget, isChecked, totalBudget, setTotalBudget) => {
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
    ;
  </>;
};

export default Budget;
