import {
  StyledWelcome,
  StyledWelcomeTitle,
  StyledWelcomeText,
  StyledWelcomeButton,
  StyledDescriptionWelcome,
} from "../../Styles/Styles";
import Budget from "../Budget/Budget";

const Welcome = ({ joined, setJoined }) => {
  return (
    <>
      {joined ? (
        <StyledWelcome>
          <StyledWelcomeTitle>Bienvenido</StyledWelcomeTitle>
          <StyledWelcomeText>
            ¿Necesitas calcular un prespuesto? ¿Eres desarrollador y necesitas
            una aplicacion donde puedas hacerlo de manera fácil? ¡Entonces esta
            es tu aplicación!
          </StyledWelcomeText>
          <StyledDescriptionWelcome>
            En ella podrás elegir entre los servicios que quieras presupuestar y
            modificar los campos disponibles.
          </StyledDescriptionWelcome>
          <StyledWelcomeButton onClick={() => setJoined(false)}>
            Comenzar
          </StyledWelcomeButton>
        </StyledWelcome>
      ) : null}
      <Budget />
    </>
  );
};

export default Welcome;
