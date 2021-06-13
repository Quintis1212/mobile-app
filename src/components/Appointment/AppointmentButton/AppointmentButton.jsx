import React from "react";
import {
  AppointmentButtonStyled,
  AppointmentButtonText,
} from "./AppointmentButton.styled";

const AppointmentButton = ({ children }) => {
  return (
    <AppointmentButtonStyled>
      <AppointmentButtonText> {children}</AppointmentButtonText>
    </AppointmentButtonStyled>
  );
};

export default AppointmentButton;
