import React from 'react';

const CalculateContacts = (state) => {
    return (
        <div>
            <div>
                <p>Вкажіть спосіб звязку</p>
                <input 
                value={state.methodOfCommunication}
                onChange={(e) => state.setMethodOfCommunication(e.target.value)}/>
            </div>
            <div>
                <p>Вкажіть номер телефона або адресс електроної пошти</p>
                <input
                value={state.addressOfCommunication}
                onChange={(e) => state.setAddressOfCommunication(e.target.value)}/>
            </div>
            <div>
                <p>Виберіть дату та час коли з вами звязатися</p>
                <input type='date'
                value={state.contactsDate}
                onChange={(e) => state.setContactsDate(e.target.value)}/>
                <input type='time'
                value={state.contactsTime}
                onChange={(e) => state.setContactsTime(e.target.value)}/>
            </div>
        </div>
    );
};

export default CalculateContacts;