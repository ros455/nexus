import React, { useState, useEffect } from "react";
import CheckboxAndInputTempalate from "./template/CheckboxAndInputTempalate";
import { FaCheck } from "react-icons/fa";
import styles from "../../style/calculation.module.scss";
const dataArray = [
  {
    id: "add_func_news",
    name: "Новини - статті - блог",
    price: 500,
  },
  {
    id: "add_func_reviews",
    name: "Відгуки",
    price: 500,
  },
  {
    id: "add_func_gallery",
    name: "Портфоліо - галерея",
    price: 500,
  },
  {
    id: "add_func_chat",
    name: "Онлайн чат",
    price: 500,
  },
  {
    id: "add_func_arrowUp",
    name: "Кнопка піднятися вгору",
    price: 500,
  },
  {
    id: "add_func_back_form",
    name: "Форма зворотнього зв'язку",
    price: 500,
  },
  {
    id: "add_func_currency",
    name: "Декілька валют",
    price: 500,
  },
  {
    id: "add_func_color",
    name: "Декілька кольорових схем",
    price: 500,
  },
  {
    id: "add_func_affiliate_program",
    name: "Партнерская программа - бонусні бали",
    price: 500,
  },
  {
    id: "add_func_wholesale_prices",
    name: "Оптові ціни",
    price: 500,
  },
  {
    id: "add_func_product_comparison",
    name: "Порівняння товарів",
    price: 500,
  },
  {
    id: "add_func_calculator",
    name: "Калькулятор розрахунку",
    price: 500,
  },
  {
    id: "add_func_personal_office",
    name: "Особистий кабінет",
    price: 500,
  },
  {
    id: "add_func_registration",
    name: "Реєстрація",
    price: 500,
  },
];

const AdditionalFunctionality = ({
  resultArray,
  setResultArray,
  setNumberOfLanguage,
  numberOfLanguage,
  setSiteLnguage,
  siteLnguage,
}) => {
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
      <h4>Додатковий функціонал</h4>
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
