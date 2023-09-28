import React from 'react';
import TitleTemplate from './template/TitleTemplate';
import RoundBlockTemplate from './template/RoundBlockTemplate';
import {GoCommentDiscussion} from 'react-icons/go';
import {AiOutlineSolution} from 'react-icons/ai';
import { MdDashboardCustomize } from 'react-icons/md';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { AiOutlineForm } from 'react-icons/ai';
import { SiSpeedtest } from 'react-icons/si';
import {MdOutlineRocketLaunch} from 'react-icons/md';
import styles from '../style/sevenSteps.module.scss';
import style from '../style/roundBlock.module.scss';
const dataArray = [
    {
        icon: <GoCommentDiscussion className={style.round_block_icon}/>,
        text: 'Обговорення',
        number: 1
    },
    {
        icon: <AiOutlineSolution className={style.round_block_icon}/>,
        text: 'Брифінг',
        number: 2
    },
    {
        icon: <MdDashboardCustomize className={style.round_block_icon}/>,
        text: 'Дизайн',
        number: 3
    },
    {
        icon: <BiLogoVisualStudio className={style.round_block_icon}/>,
        text: 'Верстка сайту',
        number: 4
    },
    {
        icon: <AiOutlineForm className={style.round_block_icon}/>,
        text: 'Наповнення',
        number: 5
    },
    {
        icon: <SiSpeedtest className={style.round_block_icon}/>,
        text: 'Тестування',
        number: 6
    },
    {
        icon: <MdOutlineRocketLaunch className={style.round_block_icon}/>,
        text: 'Запуск',
        number: 7
    },
];

const SevenSteps = () => {
    return (
        <div className={styles.seven_step_wrap}>
            <div>
                <TitleTemplate text={'Сайт за 7 кроків'}/>
            </div>
            <div className={styles.seven_step_round_blocks_main_wrap}>
                {dataArray.map((item) => (
                <RoundBlockTemplate item={item} key={item.number}/>
                ))}
            </div>
        </div>
    );
};

export default SevenSteps;