
import React from "react";
import styles from '../../style/calculation.module.scss'

const OrderForm = (state) => {

  return (
    <div  className={styles.item_one}>
        <h4 className={styles.h4_total} >{state.page.Calculator.Total_count}</h4>
      {state.siteTypes?.selected && (
        <div className={styles.order_form_total} >
          <p>{state.page.Calculator.Site_type}:</p>
          <p>{state.siteTypes?.name} - </p>
          <p>{state.siteTypes?.price}</p>
        </div>
      )}
      {state.siteDesign?.selected && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Type_design}:</p>
          <p>{state.siteDesign?.name}</p>
          <p>{state.siteDesign?.price}</p>
        </div>
      )}
      {state.siteAdaptive?.selected && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Adaptive_type}:</p>
          <p>{state.siteAdaptive?.name}</p>
          <p>{state.siteAdaptive?.price}</p>
        </div>
      )}
      {state.siteManagementSystem?.selected && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Management_system}:</p>
          <p>{state.siteManagementSystem?.name}</p>
          <p>{state.siteManagementSystem?.price}</p>
        </div>
      )}
      {state.siteLnguage?.selected && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Several_languages}:</p>
          <p>{state.numberOfLanguage}</p>
          <p>{state.priceForLanguage}</p>
        </div>
      )}
      {!!state.siteAdditionalFunctionality.length && (
        <div className={styles.order_form_additional_total} >
            <p>{state.page.Calculator.Additional_functionality}</p>
            {state.siteAdditionalFunctionality.map((item) => (
                <div style={{marginLeft:'10px'}} className={styles.order_form_total} key={item.name}>
                  {item?.name != 'Декілька мов' &&
                  <>
                    <p>-{item.name}</p>
                    <p>{item.price}</p>
                  </>}
                </div>
            ))}
        </div>
      )}
      {!!state.siteAdditionalServices.length && (
        <div className={styles.order_form_additional_total}>
            <p>{state.page.Calculator.Additional_services}</p>
            {state.siteAdditionalServices.map((item) => (
                <div style={{marginLeft:'10px'}} className={styles.order_form_total}  key={item.name}>
                    <p>-{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
      )}
      {state.numberOfPage && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Number_of_pages}:</p>
          <p>{state.numberOfPage}</p>
        </div>
      )}
      {state.technicaTask?.selected && (
        <div className={styles.order_form_total}>
          <p>{state.page.Calculator.Writing_Technical_Task}:</p>
          <p>{state.technicaTask?.price}</p>
        </div>
      )}
      {state.description && (
        <div >
          <p>{state.page.Calculator.Additional_description}:</p>
          <p>{state.description}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
