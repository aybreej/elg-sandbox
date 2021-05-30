import React from 'react';
import PropTypes from 'prop-types';
import './band.css';
import { Element } from './element';

export const Band = props => {
  const tripleBand = !props.elg;
  return (
    <div className="elg-band">
      <Element assessment={props.assessments[0]} letter={props.elg ? '1' : 'e'} />
      <Element assessment={props.assessments[1]} letter={props.elg ? '2' : 'd'} />
      {tripleBand && <Element assessment={props.assessments[2]} letter="s" />}
    </div>
  );
};

Band.propTypes = {
  assessments: PropTypes.arrayOf(PropTypes.string),
  elg: PropTypes.bool
};

Band.defaultProps = {
  assessments: ['none', 'none', 'none'],
  elg: false
};
