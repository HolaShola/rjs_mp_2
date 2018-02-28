import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

const ButtonGroup = props => (
  <div className="ButtonGroup">
    <p>{props.label}</p>
    {React.Children.map(props.children, (child, index) =>
      React.cloneElement(child, {
        onClick: () => {
          props.onChange(index);
        },
      }),
    )}
  </div>
);

ButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

ButtonGroup.defaultProps = {
  onChange: () => {},
};

export default ButtonGroup;

