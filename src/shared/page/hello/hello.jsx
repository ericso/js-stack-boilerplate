// @flow

import React from 'react';
import Helmet from 'react-helmet';

import Message from '../../container/message';
import HelloButton from '../../container/hello-button';


const TITLE = 'Hello Page';


const HelloPage = () =>
  <div>
    <Helmet
      title={TITLE}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: TITLE },
      ]}
    />
    <h1>{TITLE}</h1>
    <Message />
    <HelloButton />
  </div>;

export default HelloPage;
