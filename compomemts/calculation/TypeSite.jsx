import React, { useState } from "react";
import styles from "../../style/calculation.module.scss";
import { BsInfoCircle } from "react-icons/bs";
// import checkboxInputTemplate from './template/checkboxInputTemplate';
import { FaCheck } from "react-icons/fa";
import CalculateInfo from "./CalculateInfo";
const TypeSite  = ({
  page,
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
    name: page.Calculator.Internet_shop,
  });
  const [siteTypesLanding, setSiteTypesLanding] = useState({
    selected: false,
    price: 500,
    name: page.Calculator.Landing,
  });
  const [siteTypesCorporate, setSiteTypesCorporate] = useState({
    selected: false,
    price: 800,
    name: page.Calculator.Corporate_site,
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

  return (
    <div className={styles.item_one}>
      <h4 className={`${siteTypesError && styles.error_message}`}>
        {page.Calculator.Type_site}
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
        <p>{page.Calculator.Internet_shop}</p>
        <div
          onMouseEnter={() => setShowInfoModalStore(true)}
          onMouseLeave={() => setShowInfoModalStore(false)}
          className={styles.info_modal_wrap}
        >
          <CalculateInfo show={showInfoModalStore} />
          <BsInfoCircle className={styles.info_icon} />
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
        <p>{page.Calculator.Landing}</p>
        <div
          onMouseEnter={() => setShowInfoModalLanding(true)}
          onMouseLeave={() => setShowInfoModalLanding(false)}
          className={styles.info_modal_wrap}
        >
          <CalculateInfo show={showInfoModalLanding} />
          <BsInfoCircle className={styles.info_icon} />
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
        <p>{page.Calculator.Corporate_site}</p>
        <div
          onMouseEnter={() => setShowInfoModalCorporate(true)}
          onMouseLeave={() => setShowInfoModalCorporate(false)}
          className={styles.info_modal_wrap}
        >
          <CalculateInfo show={showInfoModalCorporate} />
          <BsInfoCircle className={styles.info_icon} />
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
          className={styles.info_modal_wrap}
        >
          <CalculateInfo show={showInfoModalB2B} />
          <BsInfoCircle className={styles.info_icon} />
        </div>
      </div>
    </div>
  );
};

export default TypeSite;
