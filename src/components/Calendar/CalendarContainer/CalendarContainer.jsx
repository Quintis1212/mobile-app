import React from "react";
import PersonCardContainerStyled from "./CalendarContainer.styled";

const CalendarContainer = ({children}) => {
  return (
    <PersonCardContainerStyled>
      {children}
    </PersonCardContainerStyled>
  );
};

export default CalendarContainer;
