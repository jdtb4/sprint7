import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { StyledPanel, StyledButton, StyledInput } from "../../Styles/Styles";

const Panel = ({ totalBudget, setTotalBudget, setSumaValor }) => {
  const [value, setValue] = useState({
    numPage: 0,
    numLang: 0,
  });
  const { numLang, numPage } = value;

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    handlePrice();
  };
  const handlePrice = () => {
    if (numPage <= 0 || numLang <= 0) {
      return;
    }
  };
  const AddPage = () => {
    const suma = parseInt(numPage) + 1;
    setValue({
      ...value,
      numPage: suma,
    });
  };
  const SubtractPage = () => {
    const subtrc = parseInt(numPage) - 1;
    setValue({
      ...value,
      numPage: subtrc,
    });
  };

  const AddLang = () => {
    const suma = parseInt(numLang) + 1;
    setValue({
      ...value,
      numLang: suma,
    });
  };
  const SubtractLang = () => {
    const subtrc = parseInt(numLang) - 1;
    setValue({
      ...value,
      numLang: subtrc,
    });
  };

  useEffect(() => {
    if (numPage > 0 && numLang > 0) {
      setTotalBudget(totalBudget + numPage * numLang * 30);
    }
  }, [numPage, numLang]);

  return (
    <>
      <StyledPanel>
        <p>Número de páginas:</p>
        <StyledButton type="button" name="numPage" onClick={AddPage}>
          +
        </StyledButton>
        <StyledInput
          type="number"
          name="numPage"
          value={numPage}
          min={0}
          onChange={handleChange}
        ></StyledInput>
        <StyledButton type="button" name="numPage" onClick={SubtractPage}>
          -
        </StyledButton>
        <Popup
          value={numPage}
          text="Indica el número de páginas que necesita tu proyecto:"
        />
      </StyledPanel>
      <StyledPanel>
        <p>Número de idiomas:</p>
        <StyledButton type="button" name="numLang" onClick={AddLang}>
          +
        </StyledButton>
        <StyledInput
          type="number"
          name="numLang"
          value={numLang}
          min={0}
          onChange={handleChange}
        ></StyledInput>
        <StyledButton type="button" name="numLang" onClick={SubtractLang}>
          -
        </StyledButton>
        <Popup
          value={numLang}
          text="Indica el número de idiomas que necesita tu proyecto:"
        />
      </StyledPanel>
    </>
  );
};

export default Panel;
