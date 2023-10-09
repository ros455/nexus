import React from "react";
import styles from '../../style/calculation.module.scss'
const CalculationValidation = ({ siteTypesError, siteDesignError }) => {
  return (
    <div>
      <p className={styles.error_message}>{(siteTypesError || siteDesignError) && "Виберіть обов'язкові поля"}</p>
    </div>
  );
};

export default CalculationValidation;
