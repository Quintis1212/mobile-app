import React from "react";
import PropTypes from "prop-types";
import { ParagraphInfo, ParagraphInfoBold } from "./PersonInfo.styled";
const PersonInfo = ({ paragraphInfo, paragraphInfoBold }) => {
  return (
    <div>
      <ParagraphInfo>{paragraphInfo}</ParagraphInfo>
      <ParagraphInfoBold>{paragraphInfoBold}</ParagraphInfoBold>
    </div>
  );
};

PersonInfo.propTypes = {
  paragraphInfo: PropTypes.string.isRequired,
  paragraphInfoBold: PropTypes.string.isRequired,
};

export default PersonInfo;
