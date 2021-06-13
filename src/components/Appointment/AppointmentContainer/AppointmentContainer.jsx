import React from "react";
import PersonCardContainerStyled from "../../PersonCard/PersonCardContainer/PersonCardContainer.styled";


const AppointmentContainer = ({children}) => {
  return <PersonCardContainerStyled primary>{children}</PersonCardContainerStyled>;
};

export default AppointmentContainer;
