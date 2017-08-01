// @flow

import React from 'react';
import injectSheet from 'react-jss';


type PropsType = {
  classes: Object,
  label: string,
  handleClick: Function
};


// Safely extract the style property from props
const extractStyle = (name: string) => (props: Object) => props.style && props.style[name];

const styles = {
  button: {
    background: extractStyle('backgroundColor'),
  },
  label: {
    fontSize: extractStyle('fontSize'),
    fontWeight: extractStyle('fontWeight'),
  },
};


const Button = (props: PropsType) => {
  const {
    classes,
    label,
    handleClick,
  } = props;

  return (
    <button
      className={classes.button}
      onClick={handleClick}
    >
      <span
        className={classes.label}
      >
        { label }
      </span>
    </button>
  );
};

export default injectSheet(styles)(Button);
