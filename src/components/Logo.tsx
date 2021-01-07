import { VoidFunctionComponent } from 'react';
import styles from './Logo.module.css';

export const Logo: VoidFunctionComponent = () => {
  return (
    <h1 className={styles.wrapper}>
      <div className={styles.cssInJs}>CSS-in-JS</div>
      <div className={styles.vs}>vs</div>
      <div className={styles.stateManagers}>State managers</div>
    </h1>
  );
};
