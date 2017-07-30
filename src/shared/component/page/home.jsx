// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import { APP_NAME } from '../../config';
import styles from './homeStyles';


const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />

    <h1>{APP_NAME}</h1>

    <div className="jss-example">
      <h3 className="jss-header">JSS</h3>
      <p className={classes.hoverMe}>Hover me.</p>
      <p className={classes.resizeMe}>Resize the window.</p>
      <button className={classes.specialButton}>Composition</button>
    </div>

  </div>;

export default injectSheet(styles)(HomePage);
