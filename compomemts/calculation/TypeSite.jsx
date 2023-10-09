import React, { useState } from "react";
import styles from "../../style/calculation.module.scss";
import { BsInfoCircle } from "react-icons/bs";
// import checkboxInputTemplate from './template/checkboxInputTemplate';
import { FaCheck } from "react-icons/fa";
import CalculateInfo from "./CalculateInfo";
const TypeSite = ({
  setSelectedOption,
  siteTypesError,
  choseTypeStore,
  choseTypeLanding,
  choseTypeCorporate,
  choseTypeB2B,
  selectedOption,
}) => {
  const [siteTypesStore, setSiteTypesStore] = useState({
    selected: false,
    price: 1000,
    name: "Інтернет магазин",
  });
  const [siteTypesLanding, setSiteTypesLanding] = useState({
    selected: false,
    price: 500,
    name: "Лендінг - сайт візитка",
  });
  const [siteTypesCorporate, setSiteTypesCorporate] = useState({
    selected: false,
    price: 800,
    name: "Корпоративний сайт",
  });
  const [siteTypesB2B, setSiteTypesB2B] = useState({
    selected: false,
    price: 1200,
    name: "B2B",
  });
  const [showInfoModalStore, setShowInfoModalStore] = useState(false);
  const [showInfoModalLanding, setShowInfoModalLanding] = useState(false);
  const [showInfoModalCorporate, setShowInfoModalCorporate] = useState(false);
  const [showInfoModalB2B, setShowInfoModalB2B] = useState(false);

  const handleChangeTypesStore = () => {
    setSiteTypesStore((prevState) => ({ ...prevState, selected: true }));
    setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
    setSelectedOption({
      selected: true,
      price: siteTypesStore?.price,
      name: siteTypesStore?.name,
    });
    choseTypeStore();
  };

  const handleChangeTypesLanding = () => {
    setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesLanding((prevState) => ({ ...prevState, selected: true }));
    setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
    setSelectedOption({
      selected: true,
      price: siteTypesLanding?.price,
      name: siteTypesLanding?.name,
    });
    choseTypeLanding();
  };

  const handleChangeTypesCorporate = () => {
    setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesCorporate((prevState) => ({ ...prevState, selected: true }));
    setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
    setSelectedOption({
      selected: true,
      price: siteTypesCorporate?.price,
      name: siteTypesCorporate?.name,
    });
    choseTypeCorporate();
  };

  const handleChangeTypesB2B = () => {
    setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
    setSiteTypesB2B((prevState) => ({ ...prevState, selected: true }));
    setSelectedOption({
      selected: true,
      price: siteTypesB2B?.price,
      name: siteTypesB2B?.name,
    });
    choseTypeB2B();
  };

  console.log("selectedOption", selectedOption);
  console.log("siteTypesStore", siteTypesStore);

  return (
    <div className={styles.item_one}>
      <h4 className={`${siteTypesError && styles.error_message}`}>
        Оберіть тип сайту
      </h4>
      <div className={styles.input_wrap}>
        <label
          htmlFor="type_store"
          className={`${styles.custom_checkbox} ${
            siteTypesStore?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeTypesStore}
        >
          <FaCheck />
        </label>
        <p>Інтернет магазин</p>
        <div
          className={styles.info_wrap}
          onMouseEnter={() => setShowInfoModalStore(true)}
          onMouseLeave={() => setShowInfoModalStore(false)}
        >
          <BsInfoCircle className={styles.info_icon} />
          <CalculateInfo show={showInfoModalStore} />
        </div>
      </div>

      <div className={styles.input_wrap}>
        <label
          htmlFor="type_landing"
          className={`${styles.custom_checkbox} ${
            siteTypesLanding?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeTypesLanding}
        >
          <FaCheck />
        </label>
        <p>Лендінг - сайт візитка</p>
        <div
          onMouseEnter={() => setShowInfoModalLanding(true)}
          onMouseLeave={() => setShowInfoModalLanding(false)}
        >
          <BsInfoCircle className={styles.info_icon} />
          <CalculateInfo show={showInfoModalLanding} />
        </div>
      </div>
      <div className={styles.input_wrap}>
        <label
          htmlFor="type_corporate"
          className={`${styles.custom_checkbox} ${
            siteTypesCorporate?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeTypesCorporate}
        >
          <FaCheck />
        </label>
        <p>Корпоративний сайт</p>
        <div
          onMouseEnter={() => setShowInfoModalCorporate(true)}
          onMouseLeave={() => setShowInfoModalCorporate(false)}
        >
          <BsInfoCircle className={styles.info_icon} />
          <CalculateInfo show={showInfoModalCorporate} />
        </div>
      </div>
      <div className={styles.input_wrap}>
        <label
          htmlFor="type_b2b"
          className={`${styles.custom_checkbox} ${
            siteTypesB2B?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeTypesB2B}
        >
          <FaCheck />
        </label>
        <p>B2B</p>
        <div
          onMouseEnter={() => setShowInfoModalB2B(true)}
          onMouseLeave={() => setShowInfoModalB2B(false)}
        >
          <BsInfoCircle className={styles.info_icon} />
          <CalculateInfo show={showInfoModalB2B} />
        </div>
      </div>
    </div>
  );
};

export default TypeSite;
