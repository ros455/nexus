import React, { useState } from "react";
import styles from "../../style/calculation.module.scss";
import { FaCheck } from "react-icons/fa";

const AdditionalServices = ({ resultArray, setResultArray, page }) => {
  const [dataArray] = useState([
    {
      id: "add_services_sitemap",
      name: page.Calculator.Creating_sitemap,
      price: 500,
    },
    {
      id: "add_services_hosting",
      name: page.Calculator.Installation_on_hosting,
      price: 500,
    },
    {
      id: "add_services_seo",
      name: page.Calculator.SEO_optimization,
      price: 500,
    },
    {
      id: "add_services_paymant",
      name: page.Calculator.Online_payment,
      price: 500,
    },
    {
      id: "add_services_trading_platforms",
      name: page.Calculator.Unloading_for_trading_platforms,
      price: 500,
    },
    {
      id: "add_services_exel",
      name: page.Calculator.Export_excel,
      price: 500,
    },
    {
      id: "add_services_crm",
      name: page.Calculator.Synchronization_with_CRM,
      price: 500,
    },
    {
      id: "add_services_google_maps",
      name: page.Calculator.Connecting_google_maps,
      price: 500,
    },
    {
      id: "add_services_facebook",
      name: page.Calculator.Facebook_pixel_connection,
      price: 500,
    },
    {
      id: "add_services_telegram",
      name: page.Calculator.Sending_orders_to_Telegram,
      price: 500,
    },
    {
      id: "add_services_telegram_bot",
      name: page.Calculator.Telegram_bot,
      price: 500,
    },
    {
      id: "add_services_nova_posht",
      name: page.Calculator.Integration_posht,
      price: 500,
    },
    {
      id: "add_services_optimization",
      name: page.Calculator.Optimizing_download_speed,
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
      <h4>{page.Calculator.Additional_services}</h4>
      <div className={styles.item_additional}>
        {dataArray.map((item) => (
          <div key={item.id} className={`${styles.input_wrap} ${styles.outside_scroll_item}`}>
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
      </div>
    </div>
  );
};

export default AdditionalServices;
