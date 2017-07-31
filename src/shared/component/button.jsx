// @flow

import React from 'react';
import injectSheet from 'react-jss';


type PropsType = {
  classes: Object,
  label: string,
  handleClick: Function
};


// Safely extract the style property from props
const extractStyle = (props: Object, name: string) => props.style && props.style[name];

const styles = {
  button: {
    background: props => extractStyle(props, 'backgroundColor'),
  },
  label: {
    fontSize: props => extractStyle(props, 'fontSize'),
    fontWeight: props => extractStyle(props, 'fontWeight'),
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
