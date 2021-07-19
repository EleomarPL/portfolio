import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ href, classNameIcon }) => {
  return (
    <a
      className="card-icon space-cards fs-5 mb-2"
      href={ href }
      rel="noreferrer noopener"
      target="_blank"
    >
      <i className={ classNameIcon }></i>
      <span className="visually-hidden-focusable">{ classNameIcon.split(' ')[1].slice(3) }</span>
    </a>
  );
};

ContactIcon.propTypes = {
  classNameIcon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default ContactIcon;