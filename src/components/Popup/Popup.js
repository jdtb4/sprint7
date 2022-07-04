import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const StledPopupButton = styled.button`
  background-color: #e5e7e9;
  margin: 5px;
  color: #1a5276;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #1a5276;
  box-shadow: 0px 0px 5px #d6eaf8;
`;
const StyledPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const StyledModal = styled.div`
  background: rgba(235, 245, 251, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;
const StyledModalContent = styled.p`
  padding: 15px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #d6eaf8;
  border: 2px solid #aed6f1;
  border-radius: 15px;
  z-index: 1;
`;

const Popup = ({ value, text }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("click outside");
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  /*const handleClickOutside = (e) => {
    if (e.target.className === "StyledPopup") {
      setVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible]);*/

  return (
    <>
      <StledPopupButton type="button" onClick={() => setVisible(!visible)}>
        i
      </StledPopupButton>
      {visible && (
        <StyledPopup ref={ref}>
          <StyledModal>
            <StyledModalContent>
              {text} {value}
            </StyledModalContent>
          </StyledModal>
        </StyledPopup>
      )}
    </>
  );
};

export default Popup;
