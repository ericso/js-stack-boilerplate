// @flow

import React from 'react';
import injectSheet from 'react-jss';


type PropsType = {
  classes: Object,
  label: string,
  handleClick: Function,

};


const styles = {
  button: {
    background: props => props.style.backgroundColor,
  },
  label: {
    fontSize: props => props.style.fontSize,
    fontWeight: props => props.style.fontWeight,
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
