
import React from "react";
import { SiJquery, SiInsomnia } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
  BiLogoMongodb
} from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import styles from '../../style/portfolioOne.module.scss';
import Image from 'next/image'
const PortfolioOneTools = () => {

    const dataArray = [
        {
          icon: <TiHtml5 className={styles.icon} />,
          text: 'HTML',
          styleBlock: styles.html_block
        },
        {
          icon: <FaCss3Alt className={styles.icon} />,
          text: 'CSS',
          styleBlock: styles.css_block
        },
        {
          icon: <BsGoogle className={styles.icon} />,
          text: 'Google maps',
          styleBlock: styles.google_block
        },
        {
          icon: <BiLogoNodejs className={styles.icon} />,
          text: 'NodeJs',
          styleBlock: styles.node_block
        },
        {
          icon: <TbBrandNextjs className={styles.icon} />,
          text: 'NextJS',
          styleBlock: styles.next_block
        },
        {
          icon: <BiLogoReact className={styles.icon} />,
          text: 'React',
          styleBlock: styles.react_block
        },
        {
          icon: <BiLogoJavascript className={styles.icon} />,
          text: 'JavaScript',
          styleBlock: styles.js_block
        },
        {
          icon: <FiFigma className={styles.icon} />,
          text: 'Figma',
          styleBlock: styles.figma_block
        },
        {
          icon: <BiLogoVisualStudio className={styles.icon} />,
          text: 'VS Code',
          styleBlock: styles.vs_code_block
        },
        {
          icon: <BiLogoMongodb className={styles.icon} />,
          text: 'Mongo DB',
          styleBlock: styles.mongo_block
        },
      ]

    const tags = [
        'JavaScript',
        'HTML',
        'SCSS',
        'React / NextJs',
        'NodeJs',
        'MongoDB',
    ]


    return (
<div className={styles.wrap_tags}>
            {dataArray.map((tag,idx) => (
                <div 
                className={styles.tags_one}
                key={idx}>
                    {tag.icon}
                    <p>{tag.text}</p>
                </div>
            ))}
        </div>
    );
};

export default PortfolioOneTools;