import React from "react";
import PropTypes from "prop-types";
import { ImageContainerStyled, ImageStyled } from './PersonPhoto.styled';


const PersonPhoto = ({ image, alt }) => {
  return (
    <ImageContainerStyled>
    <ImageStyled src={image} alt={alt}/>
</ImageContainerStyled>   
  );
};

PersonPhoto.propTypes = {
    image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PersonPhoto;
