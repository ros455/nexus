import React, { useState } from "react";
import styles from "../../style/calculation.module.scss";
import { FaCheck } from "react-icons/fa";

const Adaptive = ({
  siteAdaptiveYes,
  siteAdaptiveNo,
  handleChangeAdaptiveYes,
  handleChangeAdaptiveNo,
}) => {
  return (
    <div className={styles.item_one}>
      <h4>Адаптив під різні екрани</h4>
      <div className={styles.input_wrap}>
        <label
          htmlFor="adaptive_yes"
          className={`${styles.custom_checkbox} ${
            siteAdaptiveYes?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeAdaptiveYes}
        >
          <FaCheck />
        </label>
        <p>Так</p>
      </div>
      <div className={styles.input_wrap}>
        <label
          htmlFor="adaptive_not"
          className={`${styles.custom_checkbox} ${
            siteAdaptiveNo?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeAdaptiveNo}
        >
          <FaCheck />
        </label>
        <p>Ні</p>
      </div>
    </div>
  );
};

export default Adaptive;
