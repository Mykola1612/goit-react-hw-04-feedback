import React from 'react';
import styles from './Section.module.css';
const Section = props => {
  return (
    <section className={styles.container_section}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
