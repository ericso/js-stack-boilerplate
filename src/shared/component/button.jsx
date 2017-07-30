// @flow

import React from 'react';

type PropsType = {
  label: string,
  handleClick: Function,
};

const Button = ({ label, handleClick }: PropsType) =>
  <button onClick={handleClick}>{ label }</button>;

export default Button;
