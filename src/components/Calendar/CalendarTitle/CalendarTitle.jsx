import React from "react";
import {CalendarTitleStyled ,CalendarWrapper} from "./CalendarTitle.styled";
import PropTypes from "prop-types";
import image from "../../../calendar.png";
import image2 from "../../../disable.png";

const CalendarTitle = ({ title }) => {
  return (
    <CalendarWrapper>
      <CalendarTitleStyled >{title}</CalendarTitleStyled>
      <div>
        <img src={image} alt="icon" />
        <img src={image2} alt="icon" />
      </div>
    </CalendarWrapper>
  );
};

CalendarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default CalendarTitle;
