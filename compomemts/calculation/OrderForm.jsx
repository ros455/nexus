
import React from "react";
import styles from '../../style/calculation.module.scss'

const OrderForm = (state) => {
  console.log('state', state);





  return (
    <div  className={styles.item_one}>
        <h4 className={styles.h4_total} >Загальний підрахунок</h4>
      {state.siteTypes?.selected && (
        <div className={styles.order_form_total} >
          <p>Тип сайту:</p>
          <p>{state.siteTypes?.name} - </p>
          <p>{state.siteTypes?.price} грн</p>
        </div>
      )}
      {state.siteDesign?.selected && (
        <div className={styles.order_form_total}>
          <p>Тип дизайну:</p>
          <p>{state.siteDesign?.name}</p>
          <p>{state.siteDesign?.price}</p>
        </div>
      )}
      {state.siteAdaptive?.selected && (
        <div className={styles.order_form_total}>
          <p>Тип адаптиву:</p>
          <p>{state.siteAdaptive?.name}</p>
          <p>{state.siteAdaptive?.price}</p>
        </div>
      )}
      {state.siteManagementSystem?.selected && (
        <div className={styles.order_form_total}>
          <p>Система управління (адмін панель):</p>
          <p>{state.siteManagementSystem?.name}</p>
          <p>{state.siteManagementSystem?.price}</p>
        </div>
      )}
      {state.siteLnguage?.selected && (
        <div className={styles.order_form_total}>
          <p>Декілька мов:</p>
          <p>{state.numberOfLanguage}</p>
          <p>{state.priceForLanguage}</p>
        </div>
      )}
      {!!state.siteAdditionalFunctionality.length && (
        <div className={styles.order_form_additional_total} >
            <p>Додатковий функціонал</p>
            {state.siteAdditionalFunctionality.map((item) => (
                <div style={{marginLeft:'10px'}} className={styles.order_form_total} key={item.name}>
                  {item?.name != 'Декілька мов' &&
                  <>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </>}
                </div>
            ))}
        </div>
      )}
      {!!state.siteAdditionalServices.length && (
        <div className={styles.order_form_additional_total}>
            <p>Додаткові послуги</p>
            {state.siteAdditionalServices.map((item) => (
                <div style={{marginLeft:'10px'}} className={styles.order_form_total}  key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
      )}
      {state.numberOfPage && (
        <div className={styles.order_form_total}>
          <p>Кількість сторінок:</p>
          <p>{state.numberOfPage}</p>
        </div>
      )}
      {state.technicaTask?.selected && (
        <div className={styles.order_form_total}>
          <p>Написання ТЗ:</p>
          <p>{state.technicaTask?.price}</p>
        </div>
      )}
      {state.description && (
        <div >
          <p>Додатковий опис:</p>
          <p>{state.description}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
