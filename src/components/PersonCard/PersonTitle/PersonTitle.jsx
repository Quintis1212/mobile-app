import React from "react";
import PropTypes from "prop-types";
import PersonTitleStyled from "./PersonTitle.styled";

const PersonTitle = ({ title }) => {
  return <PersonTitleStyled>{title}</PersonTitleStyled>;
};

PersonTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PersonTitle;
