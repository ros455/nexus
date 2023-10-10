import React from "react";
import styles from "../../style/calculation.module.scss";
import { FaCheck } from "react-icons/fa";

const IndividualFunctions = ({
  page,
  description,
  technicaTask,
  setDescription,
  setTechnicaTask,
}) => {
  const changeFunc = () => {
    setTechnicaTask({
      selected: !technicaTask?.selected,
      price: technicaTask?.price,
      name: technicaTask?.name,
    });
  };
  return (
    <div className={styles.order_form_individual_funk}>
      <h4>{page.Calculator.Individual_functions}</h4>
      <div className={styles.order_form_tz_chekbox}>
        <label
          htmlFor="individual_func_technical_task"
          className={`${styles.custom_checkbox} ${
            technicaTask?.selected && styles.custom_checkbox_active
          }`}
          onClick={changeFunc}
        >
          <FaCheck />
        </label>
        <p>{page.Calculator.Writing_Technical_Task}</p>
      </div>
      <h4 style={{ marginTop: "20px" }}>{page.Calculator.Anything_add}?</h4>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default IndividualFunctions;
