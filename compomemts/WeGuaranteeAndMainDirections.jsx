import React from 'react';
import styles from '../style/weGuaranteeAndMainDirections.module.scss';
import GuaranteAndDirectionsTemplate from './template/GuaranteAndDirectionsTemplate';
import TitleTemplate from './template/TitleTemplate';
import {AiOutlineDownSquare} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {BsFillDpadFill} from 'react-icons/bs';
import { MdDashboardCustomize } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';

const guaranteArray = [
    {
        icon: <AiOutlineDownSquare className={styles.guarante_directions_icon}/>,
        text: 'Виконання поставленої задачі'
    },
    {
        icon: <BiSupport className={styles.guarante_directions_icon}/>,
        text: 'Підтримку вашого сайту 14 днів'
    },
    {
        icon: <BsFillDpadFill className={styles.guarante_directions_icon}/>,
        text: 'Повний інструктаж в користуванні'
    },
]

const directionsArray = [
    {
        icon: <MdDashboardCustomize className={styles.guarante_directions_icon}/>,
        text: 'Дизайн сайтів'
    },
    {
        icon: <TbDeviceDesktopCode className={styles.guarante_directions_icon}/>,
        text: 'Створення сайтів'
    },
    {
        icon: <BiSupport className={styles.guarante_directions_icon}/>,
        text: 'Підтримка сайтів'
    },
]

const WeGuaranteeAndMainDirections = () => {
    // Problem
    return (
        <div className={styles.guarante_directions_wrap}>
            <div className={styles.guarante_wrap}>
                <TitleTemplate text={'Ми гарантуємо'}/>
                <div className={styles.guarante_item_wrap}>
                    {guaranteArray.map((item,idx) => (
                        <GuaranteAndDirectionsTemplate item={item} key={idx}/>
                    ))}
                </div>
            </div>
            <div className={styles.guarante_wrap}>
            <TitleTemplate text={'Основні напрямки'}/>
                <div className={styles.guarante_item_wrap}>
                {directionsArray.map((item,idx) => (
                        <GuaranteAndDirectionsTemplate item={item} key={idx}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeGuaranteeAndMainDirections;