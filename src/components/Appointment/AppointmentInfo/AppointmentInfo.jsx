import React from "react";
import {
  CalendarDateListTitle,
  CalendarDateListDate,
} from "../../Calendar/CalendarDateList/CalendarDateItem/CalendarDateItem.styled";
import AppointmentInfoWrapper from "./AppointmentInfoWrapper";

const AppointmentInfo = ({ label, time }) => {
  return (
    <AppointmentInfoWrapper>
      <CalendarDateListTitle>{label}</CalendarDateListTitle>
      <CalendarDateListDate>{time}</CalendarDateListDate>
    </AppointmentInfoWrapper>
  );
};

export default AppointmentInfo;
