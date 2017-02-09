import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
// import bg from '../../starry-sky.jpg';

export function Footer() {
  return (
    <div style={{ background: `#222` }} className={styles.footer}>
      <p>Made With Love @ Learners Guild &middot; by <a href="http://github.com/arayi">Arayi</a> & <a href="http://github.com/yaseenagag">Yaseen</a></p>
    </div>
  );
}

export default Footer;
