// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'react-jss';

import Message from '../../container/message';
import HelloButton from '../../container/hello-button';


const TITLE = 'Hello Page';

const THEME = {
  backgroundColor: 'blue',
  fontSize: '24px',
  fontWeight: '400',
};


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

    <ThemeProvider theme={THEME}>
      <HelloButton />
    </ThemeProvider>
  </div>;

export default HelloPage;
