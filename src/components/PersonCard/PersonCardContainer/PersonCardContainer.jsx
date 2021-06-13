import React from "react";
import PersonCardContainerStyled from "./PersonCardContainer.styled";

const PersonCardContainer = ({children}) => {
  return (
    <PersonCardContainerStyled>
      {children}
    </PersonCardContainerStyled>
  );
};

export default PersonCardContainer;
