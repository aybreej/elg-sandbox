import React from 'react';
import PropTypes from 'prop-types';
import './element.css';

export const Element = props => (
  <div className={['elg-element', `elg-element--colour-${props.assessment}`].join(' ')}>{props.letter}</div>
);

Element.propTypes = {
  assessment: PropTypes.string,
  letter: PropTypes.string
};

Element.defaultProps = {
  assessment: 'none',
  letter: ''
};
