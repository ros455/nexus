import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss';
import { FaCheck } from "react-icons/fa";
const TypeDesign = ({ setSelectedOption, setSiteDesignError, siteDesignError, siteDesignLink, setSiteDesignLink, selectedOption }) => {
    const [siteDesignYour, setSiteDesignYour] = useState({selected: false, price: 0, name: 'Ваш дизайн'});
    const [siteDesignTemplate, setSiteDesignTemplate] = useState({ selected: false, price: 500, name: 'Шаблонний' });
    const [siteDesignIndividual, setSiteDesignIndividual] = useState({ selected: false, price: 800, name: 'Індивідуальний' });

    const handleChangeDesignYour = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: true }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteDesignYour?.price, name: siteDesignYour?.name})
        setSiteDesignError(false);
    }
    
    const handleChangeDesignTemplate = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: true }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteDesignTemplate?.price, name: siteDesignTemplate?.name})
        setSiteDesignError(false);
    }
    
    const handleChangeDesignIndividual = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteDesignIndividual?.price, name: siteDesignIndividual?.name})
        setSiteDesignError(false);
    }

    return (
      <div className={styles.item_one}>
        <h4 className={`${siteDesignError && styles.error_message}`}>
          Тип дизайну
        </h4>
        <div className={styles.input_wrap_link}>
          <label
            htmlFor="design_your"
            className={`${styles.custom_checkbox} ${
              siteDesignYour?.selected && styles.custom_checkbox_active
            }`}
            onClick={handleChangeDesignYour}
          >
            <FaCheck />
          </label>
          <p>Ваш дизайн</p>
          <input
            className={`${
              selectedOption.name == siteDesignYour.name &&
              siteDesignLink == "" &&
              styles.input_error_message
            }`}
            placeholder="Посилання на ваш дизайн"
            onChange={(e) => setSiteDesignLink(e.target.value)}
            value={siteDesignLink}
          />
        </div>
        <div className={styles.input_wrap}>
          <label
            htmlFor="design_template"
            className={`${styles.custom_checkbox} ${
              siteDesignTemplate?.selected && styles.custom_checkbox_active
            }`}
            onClick={handleChangeDesignTemplate}
          >
            <FaCheck />
          </label>
          <p>Шаблонний</p>
        </div>
        <div className={styles.input_wrap}>
          <label
            htmlFor="design_idividual"
            className={`${styles.custom_checkbox} ${
              siteDesignIndividual?.selected && styles.custom_checkbox_active
            }`}
            onClick={handleChangeDesignIndividual}
          >
            <FaCheck />
          </label>
          <p>Індивідуальний</p>
        </div>
      </div>
    );
};

export default TypeDesign;