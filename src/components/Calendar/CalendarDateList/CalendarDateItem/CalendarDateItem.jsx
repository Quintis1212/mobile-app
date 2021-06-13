import React from "react";
import {
  CalendarDateListItemStyled,
  CalendarDateListTitle,
  CalendarDateListDate,
} from "./CalendarDateItem.styled";

const CalendarDateItem = ({list}) => {
  return (
    <>
      {list.map((el) => {
        return (
          <CalendarDateListItemStyled key={el}>
            <CalendarDateListTitle>Today</CalendarDateListTitle>
            <CalendarDateListDate>{el}</CalendarDateListDate>
          </CalendarDateListItemStyled>
        );
      })}
    </>
  );
};

export default CalendarDateItem;
