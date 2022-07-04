import { useState } from "react";
import styled from "styled-components";
import Popup from "../Popup/Popup";

const StyledPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aed6f1;
  border-radius: 15px;
  padding: 12px;
  margin: 10px;
`;
const StyledButton = styled.button`
  background-color: #aed6f1;
  margin: 5px;
  color: #1a5276;
  width: 25px;
  height: 25px;
  border-radius: 7px;
  border: none;
  font-size: 18px;
  box-shadow: 0px 0px 5px #d6eaf8;
`;
const StyledInput = styled.input`
  width: 40px;
  height: 20px;
  border: none;
`;

const Panel = ({ totalBudget, setTotalBudget }) => {
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
    const totalPrice = numPage * numLang * 30;
    setTotalBudget(totalBudget + totalPrice);
    localStorage.setItem("totalBudget", totalBudget + totalPrice);
  };
  return (
    <>
      <StyledPanel>
        <p>Número de páginas:</p>
        <StyledButton
          type="button"
          name="numPage"
          value={numPage + 1}
          onClick={handleChange}
        >
          +
        </StyledButton>
        <StyledInput
          type="number"
          name="numPage"
          value={numPage}
          min={0}
          onChange={handleChange}
        ></StyledInput>
        <StyledButton
          type="button"
          name="numPage"
          value={numPage - 1}
          onClick={handleChange}
        >
          -
        </StyledButton>
        <Popup
          value={numPage}
          text="Indica el número de páginas que necesita tu proyecto:"
        />
      </StyledPanel>
      <StyledPanel>
        <p>Número de idiomas:</p>
        <StyledButton
          type="button"
          name="numLang"
          value={numLang + 1}
          onClick={handleChange}
        >
          +
        </StyledButton>
        <StyledInput
          type="number"
          name="numLang"
          min={0}
          value={numLang}
          onChange={handleChange}
        ></StyledInput>
        <StyledButton
          type="button"
          name="numLang"
          value={numLang - 1}
          onClick={handleChange}
        >
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
