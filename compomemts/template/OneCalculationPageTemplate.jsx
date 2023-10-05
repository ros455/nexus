import React from 'react';

const OneCalculationPageTemplate = ({onePage}) => {
    return (
        <div>
            <h4>Назва {onePage.siteTypes?.name}</h4>
            <p>Дизайн: {onePage.siteDesign?.name}</p>
            <p>Адаптив: {onePage.siteAdaptive?.name}</p>
            <p>Адміністративна панель: {onePage.siteManagementSystem?.name}</p>
            <p>Чи потрібно допомогти в написанні технічного завдання: {onePage?.technicaTask?.name ? 'Так' : "Ні"}</p>
            <p>Кількість сторінко: {onePage?.numberOfPage?.count}</p>
            <div>
                <p>Додаткові мови: </p>
                <p>Кількість {onePage?.language?.numberOfLanguage}</p>
            </div>
            <div>
                <p>Додатковий функціонал:</p>
                {!!onePage?.siteAdditionalFunctionality.length && onePage?.siteAdditionalFunctionality.map((item) => (
                    <ul key={item.name}>
                        <li>- {item.name}</li>
                    </ul>
                ))}
            </div>
            <div>
                <p>Додатковиі послуги:</p>
                {!!onePage?.siteAdditionalServices.length && onePage?.siteAdditionalServices.map((item) => (
                    <ul key={item.name}>
                        <li>- {item.name}</li>
                    </ul>
                ))}
            </div>
            <div>
                <p>Додаткові побажання:</p>
                <p>{onePage?.description}</p>
            </div>
            <div>
                <p>Кінцева вартість: {onePage?.totalPrice}</p>
            </div>
        </div>
    );
};

export default OneCalculationPageTemplate;