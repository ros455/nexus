'use client'
import React from 'react';
import styles from '../../style/weGuaranteeAndMainDirections.module.scss';
import { motion } from "framer-motion"
const GuaranteAndDirectionsTemplate = ({item}) => {
    return (
        <div className={styles.guarante_directions_tempale_item_wrap}>
            <p >{item.icon}</p>
            <p className={styles.guarante_directions_tempale_item_text}>{item.text}</p>
        </div>
    );
};

export default GuaranteAndDirectionsTemplate;