// @flow

import React from 'react';
import Helmet from 'react-helmet';

import Button from '../../component/button';


const TITLE = 'Animation Test Page';


const AnimationTestPage = () =>
  <div>
    <Helmet
      title={TITLE}
      meta={[
        { name: 'description', content: 'A page to test animations' },
        { property: 'og:title', content: TITLE },
      ]}
    />
    <h1>{TITLE}</h1>
    <Button />
  </div>;

export default AnimationTestPage;
