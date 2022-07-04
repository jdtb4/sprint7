import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  color: #1a5276;
  width: 350px;
  height: fit-content;
  padding: 20px;
  border: 3px solid #aed6f1;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #d6eaf8;
`;

function Budget() {
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
  </StyledBudget>;
}
