// @flow

import React from 'react';
import injectSheet from 'react-jss';


type PropsType = {
  classes: Object,
  label: string,
  handleClick: Function,
};


const styles = theme => ({
  button: {
    background: theme.backgroundColor,
  },
  label: {
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
  },
});


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
