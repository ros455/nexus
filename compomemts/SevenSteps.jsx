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
import { getDictionary } from '@/lib/dictionary';

const SevenSteps = async ({lang}) => {
    const { page } = await getDictionary(lang);

    const dataArray = [
        {
            icon: <GoCommentDiscussion className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text1,
            number: 1
        },
        {
            icon: <AiOutlineSolution className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text2,
            number: 2
        },
        {
            icon: <MdDashboardCustomize className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text3,
            number: 3
        },
        {
            icon: <BiLogoVisualStudio className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text4,
            number: 4
        },
        {
            icon: <AiOutlineForm className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text5,
            number: 5
        },
        {
            icon: <SiSpeedtest className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text6,
            number: 6
        },
        {
            icon: <MdOutlineRocketLaunch className={style.round_block_icon}/>,
            text: page.SevenSteps.icon_text7,
            number: 7
        },
    ];
    return (
        <div className={styles.seven_step_wrap}>
            <div>
                <TitleTemplate text={page.SevenSteps.title}/>
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