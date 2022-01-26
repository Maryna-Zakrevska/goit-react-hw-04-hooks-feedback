import React from "react";
import PropTypes from 'prop-types';
import SectionTitleStyled from "./Section.styled";


export const Section = ({title,children}) => {
  return (
    <div>
      <SectionTitleStyled>{title}</SectionTitleStyled>
      {children}
    </div>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
  };