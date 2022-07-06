import { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
  StyledModalContent,
  StledPopupButton,
  StyledPopup,
} from "../../Styles/Styles";

const Popup = ({ value, text }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const handleClickAway = () => {
    setVisible(false);
  };

  return (
    <>
      <StledPopupButton type="button" onClick={() => setVisible(!visible)}>
        i
      </StledPopupButton>
      {visible && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <StyledPopup className="pop-up" ref={ref}>
            <StyledModalContent>
              {text} {value}
            </StyledModalContent>
          </StyledPopup>
        </ClickAwayListener>
      )}
    </>
  );
};

export default Popup;
