import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SubtopicSection = ({ children }) => {
  return (
    <Fragment>
      <h4 className="text-center fw-bold">{ children }</h4>
      <div
        className="m-auto border-bottom border-4 border-warning"
        style={ {width: '40%'} }
      >
      </div>
    </Fragment>
    
  );
};

SubtopicSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubtopicSection;