import data from "../data/data";

const Panel = ({ isChecked, parent }) => {
  return (
    isChecked && (
      <div>
        <p>Número de páginas:</p>
        <input
          type="number"
          name="numPage"
          onChange={(e) => {
            handlePanel(e, parent);
          }}
          placeholder="0"
          min={0}
          value={isChecked ? data.webPage.numPag : 0}
        />
        <p>Número de idiomas:</p>
        <input
          type="number"
          name="numLang"
          onChange={(e) => {
            handlePanel(e, parent);
          }}
          placeholder="0"
          min={0}
          value={isChecked ? data.webPage.numLang : 0}
        />
      </div>
    )
  );
};
export default Panel;
