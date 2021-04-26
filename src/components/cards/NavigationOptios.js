import React from 'react';
import PropTypes from 'prop-types';

const NavigationOptions = ({ href, classNameIcon, textOption, isColorDark }) => {
  return (
    <a className={
      `hover-effect 
        ${isColorDark
      ? 'text-dark d-flex flex-wrap align-items-center'
      : 'text-white d-flex flex-column justify-content-center'} 
      text-decoration-none
      ` } href={ href }
    >
      <p className="card-icon text-center fs-4">
        <i className={ classNameIcon }></i>
      </p>
      <p className="mx-2">{ textOption }</p>
    </a>
  );
};

NavigationOptions.propTypes = {
  href: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string.isRequired,
  textOption: PropTypes.string.isRequired,
  isColorDark: PropTypes.bool.isRequired
};

export default NavigationOptions;