import React from "react";
import styles from "../../style/title.module.scss";
const TitleTemplate = ({ text }) => {
  return (
    <div className={styles.title_tempalte_wrap}>
      <div className={styles.title_block}>
        <h3 className={styles.title_tempalte_text}>{text}</h3>
      </div>
    </div>
  );
};

export default TitleTemplate;
