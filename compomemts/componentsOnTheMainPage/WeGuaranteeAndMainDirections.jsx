import React from 'react';
import styles from '../../style/weGuaranteeAndMainDirections.module.scss';
import GuaranteAndDirectionsTemplate from '../template/GuaranteAndDirectionsTemplate';
import TitleTemplate from '../template/TitleTemplate';
import {AiOutlineDownSquare} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {BsFillDpadFill} from 'react-icons/bs';
import { MdDashboardCustomize } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { getDictionary } from '@/lib/dictionary';

const WeGuaranteeAndMainDirections = async ({lang}) => {
    const { page } = await getDictionary(lang)

    const guaranteArray = [
        {
            icon: <AiOutlineDownSquare className={styles.guarante_directions_icon}/>,
            text: page.WeGuarante.icon_text1
        },
        {
            icon: <BiSupport className={styles.guarante_directions_icon}/>,
            text: page.WeGuarante.icon_text2
        },
        {
            icon: <BsFillDpadFill className={styles.guarante_directions_icon}/>,
            text: page.WeGuarante.icon_text3
        },
    ]
    
    const directionsArray = [
        {
            icon: <MdDashboardCustomize className={styles.guarante_directions_icon}/>,
            text: page.MainDirections.icon_text1
        },
        {
            icon: <TbDeviceDesktopCode className={styles.guarante_directions_icon}/>,
            text: page.MainDirections.icon_text2
        },
        {
            icon: <BiSupport className={styles.guarante_directions_icon}/>,
            text: page.MainDirections.icon_text3
        },
    ]
    
    return (
        <div className={styles.guarante_directions_wrap}>
            <div className={styles.guarante_wrap}>
                <TitleTemplate text={page.WeGuarante.title}/>
                <div className={styles.guarante_item_wrap}>
                    {guaranteArray.map((item,idx) => (
                        <GuaranteAndDirectionsTemplate item={item} key={idx}/>
                    ))}
                </div>
            </div>
            <div className={styles.guarante_wrap}>
            <TitleTemplate text={page.MainDirections.title}/>
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