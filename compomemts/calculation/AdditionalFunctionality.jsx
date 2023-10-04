import React from 'react';

const dataArray = [
    {
        id: 'add_func_news',
        name: 'Новини - статті - блог',
        price: 500
    },
    {
        id: 'add_func_reviews',
        name: 'Відгуки',
        price: 500
    },
    {
        id: 'add_func_gallery',
        name: 'Портфоліо - галерея',
        price: 500
    },
    {
        id: 'add_func_chat',
        name: 'Онлайн чат',
        price: 500
    },
    {
        id: 'add_func_arrowUp',
        name: 'Кнопка піднятися вгору',
        price: 500
    },
    {
        id: 'add_func_back_form',
        name: "Форма зворотнього зв'язку",
        price: 500
    },
    {
        id: 'add_func_currency',
        name: 'Декілька валют',
        price: 500
    },
    {
        id: 'add_func_language',
        name: 'Декілька мов',
        price: 500
    },
    {
        id: 'add_func_color',
        name: 'Декілька кольорових схем',
        price: 500
    },
    {
        id: 'add_func_affiliate_program',
        name: 'Партнерская программа - бонусні бали',
        price: 500
    },
    {
        id: 'add_func_wholesale_prices',
        name: 'Оптові ціни',
        price: 500
    },
    {
        id: 'add_func_product_comparison',
        name: 'Порівняння товарів',
        price: 500
    },
    {
        id: 'add_func_calculator',
        name: 'Калькулятор розрахунку',
        price: 500
    },
    {
        id: 'add_func_personal_office',
        name: 'Особистий кабінет',
        price: 500
    },
    {
        id: 'add_func_registration',
        name: 'Реєстрація',
        price: 500
    },
]

const AdditionalFunctionality = ({resultArray, setResultArray}) => {

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
        <div style={{ border: '1px solid black' }}>
            <h4 style={{ fontWeight: 600, fontSize: '20px' }}>Додатковий функціонал</h4>
            {dataArray.map((item) => (
                <div key={item.id}>
                    <input
                        id={item.id}
                        type='checkbox'
                        onChange={() => handleAddToResoultArray(item)}
                    />
                    <label htmlFor={item.id}>{item.name}</label>
                    {item.name === 'Декілька мов' && <input placeholder='Кількість мов' />}
                </div>
            ))}
        </div>
    );
};

export default AdditionalFunctionality;