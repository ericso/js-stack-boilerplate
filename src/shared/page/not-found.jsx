// @flow

import React from 'react';
import Helmet from 'react-helmet';

const TITLE = 'Page Not Found';

const NotFoundPage = () =>
  <div>
    <Helmet
      title={TITLE}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: TITLE },
      ]}
    />
    <h1>{TITLE}</h1>
  </div>;

export default NotFoundPage;
