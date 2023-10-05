import React, {useState} from "react";

const CheckboxAndInputTempalate = ({setNumberOfLanguage, numberOfLanguage, setSiteLnguage, siteLnguage}) => {
    const handleChangeLanguage = (item) => {
        setSiteLnguage({selected: !item.selected, price: item.price, name: item.name})
    }
  return (
    <div>
      <div>
        <input
          id="add_func_language"
          type="checkbox"
          onChange={() => handleChangeLanguage(siteLnguage)}
        />
        <label htmlFor="add_func_language">Декілька мов</label>
      </div>
      {siteLnguage.selected && (
        <input
          type="number"
          placeholder="Кількість мов"
          value={numberOfLanguage}
          onChange={(e) => setNumberOfLanguage(e.target.value)}
        />
      )}
    </div>
  );
};

export default CheckboxAndInputTempalate;
