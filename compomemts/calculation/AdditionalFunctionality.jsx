import React, { useState, useEffect } from "react";
import CheckboxAndInputTempalate from "./template/CheckboxAndInputTempalate";
import { FaCheck } from "react-icons/fa";
import styles from "../../style/calculation.module.scss";

const AdditionalFunctionality = ({
  page,
  resultArray,
  setResultArray,
  setNumberOfLanguage,
  numberOfLanguage,
  setSiteLnguage,
  siteLnguage,
}) => {
  const [dataArray] = useState([
    {
      id: "add_func_news",
      name: page.Calculator.News_articles_blog,
      price: 500,
    },
    {
      id: "add_func_reviews",
      name: page.Calculator.Reviews,
      price: 500,
    },
    {
      id: "add_func_gallery",
      name: page.Calculator.Portfolio_gallery,
      price: 500,
    },
    {
      id: "add_func_chat",
      name: page.Calculator.Online_chat,
      price: 500,
    },
    {
      id: "add_func_arrowUp",
      name: page.Calculator.RevButton_go_up,
      price: 500,
    },
    {
      id: "add_func_back_form",
      name: page.Calculator.Feedback_form,
      price: 500,
    },
    {
      id: "add_func_currency",
      name: page.Calculator.Several_currencies,
      price: 500,
    },
    {
      id: "add_func_color",
      name: page.Calculator.Several_color_schemes,
      price: 500,
    },
    {
      id: "add_func_affiliate_program",
      name: page.Calculator.Affiliate_program,
      price: 500,
    },
    {
      id: "add_func_wholesale_prices",
      name: page.Calculator.Wholesale_prices,
      price: 500,
    },
    {
      id: "add_func_product_comparison",
      name: page.Calculator.Product_comparison,
      price: 500,
    },
    {
      id: "add_func_calculator",
      name: page.Calculator.Calculation_calculator,
      price: 500,
    },
    {
      id: "add_func_personal_office",
      name: page.Calculator.Personal_office,
      price: 500,
    },
    {
      id: "add_func_registration",
      name: page.Calculator.Registration,
      price: 500,
    },
  ])
  const handleAddToResoultArray = (item) => {
    // Перевіряємо, чи об'єкт вже міститься в resultArray за допомогою його ідентифікатора
    const isItemInArray = resultArray.some((el) => el.id === item.id);

    if (isItemInArray) {
      // Якщо об'єкт вже існує в resultArray, видаляємо його
      const updatedArray = resultArray.filter((el) => el.id !== item.id);
      setResultArray(updatedArray);
    } else {
      // Якщо об'єкт ще не існує в resultArray, додаємо його
      setResultArray([...resultArray, item]);
    }
  };

  return (
    <div className={styles.item_one}>
      <h4>{page.Calculator.Additional_functionality}</h4>
      <div className={styles.item_additional}>
        {dataArray.map((item) => (
          <div key={item.id} className={styles.input_wrap}>
            <label
              htmlFor={item.id}
              className={`${styles.custom_checkbox} ${
                resultArray.some((el) => el.id === item.id) &&
                styles.custom_checkbox_active
              }`}
              onClick={() => handleAddToResoultArray(item)}
            >
              <FaCheck />
            </label>
            <p>{item.name}</p>
          </div>
        ))}
        <CheckboxAndInputTempalate
          page={page}
          setNumberOfLanguage={setNumberOfLanguage}
          numberOfLanguage={numberOfLanguage}
          setSiteLnguage={setSiteLnguage}
          siteLnguage={siteLnguage}
        />
      </div>
    </div>
  );
};

export default AdditionalFunctionality;
