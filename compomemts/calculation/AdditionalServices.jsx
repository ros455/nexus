import React from "react";

const dataArray = [
  {
      id: 'add_services_sitemap',
      name: 'Cтворення sitemap',
      price: 500
  },
  {
      id: 'add_services_hosting',
      name: 'Установка на хостинг',
      price: 500
  },
  {
      id: 'add_services_seo',
      name: 'SEO оптимізація',
      price: 500
  },
  {
      id: 'add_services_paymant',
      name: 'Онлайн оплата',
      price: 500
  },
  {
      id: 'add_services_trading_platforms',
      name: 'Втвантаження для торговельних майданчиків',
      price: 500
  },
  {
      id: 'add_services_exel',
      name: 'Імпорт/Експорт ексель',
      price: 500
  },
  {
      id: 'add_services_crm',
      name: 'Синхронізація з CRM',
      price: 500
  },
  {
      id: 'add_services_google_maps',
      name: 'Підключення google maps',
      price: 500
  },
  {
      id: 'add_services_facebook',
      name: 'Підключення facebook pixel',
      price: 500
  },
  {
      id: 'add_services_telegram',
      name: 'Відправка замовлень в телеграмм',
      price: 500
  },
  {
      id: 'add_services_telegram_bot',
      name: 'Телеграмм бот',
      price: 500
  },
  {
      id: 'add_services_nova_posht',
      name: 'Інтеграція нової пошти',
      price: 500
  },
  {
      id: 'add_services_optimization',
      name: 'Оптимізація швидкості завантаження',
      price: 500
  },
]

const AdditionalServices = ({resultArray, setResultArray}) => {
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
    <div style={{border: '1px solid black'}}>
      <h4 style={{fontWeight: 600, fontSize: '20px'}}>Додаткові послуги</h4>
      {dataArray.map((item) => (
                <div key={item.id}>
                    <input
                        id={item.id}
                        type='checkbox'
                        onChange={() => handleAddToResoultArray(item)}
                    />
                    <label htmlFor={item.id}>{item?.name}</label>
                    {item?.name === 'Декілька мов' && <input placeholder='Кількість мов' />}
                </div>
            ))}
    </div>
  );
};

export default AdditionalServices;
