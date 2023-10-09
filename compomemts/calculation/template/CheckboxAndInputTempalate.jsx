import React, {useState} from "react";
import styles from '../../../style/calculation.module.scss'
import { FaCheck } from "react-icons/fa";

const CheckboxAndInputTempalate = ({setNumberOfLanguage, numberOfLanguage, setSiteLnguage, siteLnguage}) => {
    const handleChangeLanguage = (item) => {
        setSiteLnguage({selected: !item?.selected, price: item?.price, name: item?.name})
    }
  return (
    <div className={styles.wrap_lang}>
      <div className={styles.input_wrap_lang}>
                <label
          htmlFor="add_func_language"
          className={`${styles.custom_checkbox} ${
            siteLnguage?.selected && styles.custom_checkbox_active
          }`}
          onClick={() => handleChangeLanguage(siteLnguage)}
        >
          <FaCheck />
        </label>
        <p>Декілька мов</p>
      </div >
      {siteLnguage.selected && (
        <input
          type="number"
          placeholder="Кількість мов"
          value={numberOfLanguage}
          onChange={(e) => setNumberOfLanguage(e.target.value)}
        />
      )}
    </div>
  );
};

export default CheckboxAndInputTempalate;
