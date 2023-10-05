import React from "react";

const OrderForm = (state) => {
  return (
    <div>
        <h4>Загальний підрахунок</h4>
      {state.siteTypes?.selected && (
        <div>
          <p>Тип сайту:</p>
          <p>{state.siteTypes?.name}</p>
          <p>{state.siteTypes?.price}</p>
        </div>
      )}
      {state.siteDesign?.selected && (
        <div>
          <p>Тип дизайну:</p>
          <p>{state.siteDesign?.name}</p>
          <p>{state.siteDesign?.price}</p>
        </div>
      )}
      {state.siteAdaptive?.selected && (
        <div>
          <p>Тип адаптиву:</p>
          <p>{state.siteAdaptive?.name}</p>
          <p>{state.siteAdaptive?.price}</p>
        </div>
      )}
      {state.siteManagementSystem?.selected && (
        <div>
          <p>Система управління (адмін панель):</p>
          <p>{state.siteManagementSystem?.name}</p>
          <p>{state.siteManagementSystem?.price}</p>
        </div>
      )}
      {state.siteLnguage?.selected && (
        <div>
          <p>Декілька мов:</p>
          <p>{state.numberOfLanguage}</p>
          <p>{state.priceForLanguage}</p>
        </div>
      )}
      {!!state.siteAdditionalFunctionality.length && (
        <div>
            <p>Додатковий функціонал</p>
            {state.siteAdditionalFunctionality.map((item) => (
                <div key={item.name}>
                  {item.name != 'Декілька мов' &&
                  <>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </>}
                </div>
            ))}
        </div>
      )}
      {!!state.siteAdditionalServices.length && (
        <div>
            <p>Додаткові послуги</p>
            {state.siteAdditionalServices.map((item) => (
                <div key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
      )}
      {state.numberOfPage && (
        <div>
          <p>Кількість сторінок:</p>
          <p>{state.numberOfPage}</p>
        </div>
      )}
      {state.technicaTask?.selected && (
        <div>
          <p>Написання ТЗ:</p>
          <p>{state.technicaTask?.price}</p>
        </div>
      )}
      {state.description && (
        <div>
          <p>Додатковий опис:</p>
          <p>{state.description}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
