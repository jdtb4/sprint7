import styled from "styled-components";

export const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50%, -50%;
`;
export const StyledModalContent = styled.p`
  padding: 15px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #d6eaf8;
  border: 2px solid #aed6f1;
  border-radius: 15px;
  z-index: 1;
`;
export const StledPopupButton = styled.button`
  background-color: #e5e7e9;
  margin: 5px;
  color: #1a5276;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #1a5276;
  box-shadow: 0px 0px 5px #d6eaf8;
`;
export const StyledBudget = styled.div`
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
export const StyledPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aed6f1;
  border-radius: 15px;
  padding: 12px;
  margin: 10px;
`;
export const StyledButton = styled.button`
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
export const StyledInput = styled.input`
  width: 40px;
  height: 20px;
  border: none;
`;
export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(113, 195, 196);
  background: linear-gradient(
    0deg,
    rgba(113, 195, 196, 1) 0%,
    rgba(255, 254, 253, 1) 100%
  );
`;
export const StyledWelcomeTitle = styled.h1`
  font-size: 50px;
  color: #1a5276;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  margin: 0;
  border-bottom: 3px solid #aed6f1;
`;
export const StyledWelcomeText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  color: #1a5276;
  font-family: "Roboto Condensed", sans-serif;
  width: 500px;
`;
export const StyledWelcomeButton = styled.button`
  width: 120px;
  height: 40px;
  font-family: "sans-serif";
  font-size: 1.1rem;
  color: #aed6f1;
  border: 2px solid #aed6f1;
  border-radius: 100px;
  &:hover {
    color: white;
    cursor: pointer;
    background-color: rgba(62, 26, 231, 0.12);
    transition: all 0.3s;
    transform: translateY(5px);
  }
`;
export const StyledDescriptionWelcome = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  color: #1a5276;
  font-family: "Roboto Condensed", sans-serif;
  width: 500px;
`;
