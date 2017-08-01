// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import style from './animation-test-style';


type PropsType = {
  classes: Object,
};


const TITLE = 'Animation Test Page';


const AnimationTestPage = (props: PropsType) => {
  const { classes } = props;

  return (
    <div>
      <Helmet
        title={TITLE}
        meta={[
          { name: 'description', content: 'A page to test animations' },
          { property: 'og:title', content: TITLE },
        ]}
      />

      <h1>{TITLE}</h1>

      <div className={classes.bulgeBox} />
    </div>
  );
};

export default injectSheet(style)(AnimationTestPage);
