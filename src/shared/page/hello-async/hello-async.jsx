// @flow

import React from 'react';
import Helmet from 'react-helmet';

import MessageAsync from '../../container/message-async';
import HelloAsyncButton from '../../container/hello-async-button';

import buttonStyles from './hello-async-style';


const TITLE = 'Async Hello Page';


const HelloAsyncPage = () =>
  <div>
    <Helmet
      title={TITLE}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: TITLE },
      ]}
    />
    <h1>{TITLE}</h1>
    <MessageAsync />
    <HelloAsyncButton style={buttonStyles} />
  </div>;

export default HelloAsyncPage;
