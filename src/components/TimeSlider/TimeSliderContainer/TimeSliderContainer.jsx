import React from "react";
import TimeSlyderContainerStyled from "./TimeSliderContainer.styled";


const TimeSliderContainer = ({children}) => {
  return (
    <TimeSlyderContainerStyled>
{children}
    </TimeSlyderContainerStyled>
  );
};

export default TimeSliderContainer;
