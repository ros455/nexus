"use client";
import React,{useState} from "react";
import styles from "../style/horizontalSlider.module.scss";
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
const HorizontalSlider = () => {
  const [dataArray] = useState([
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
      icon: <BiLogoTailwindCss className={styles.icon} />,
      text: 'Tailwind',
      styleBlock: styles.tailwind_block
    },
    {
      icon: <FaBootstrap className={styles.icon} />,
      text: 'Bootstrap',
      styleBlock: styles.bootstrap_block
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
      icon: <SiJquery className={styles.icon} />,
      text: 'Jquery',
      styleBlock: styles.jquery_block
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
    {
      icon: <SiInsomnia className={styles.icon} />,
      text: 'Insomnia',
      styleBlock: styles.insomnia_block
    },
    {
      icon: <AiFillGithub className={styles.icon} />,
      text: 'GitHub',
      styleBlock: styles.github_block
    },
  ])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.marquee_1}>
          <div className={styles.marquee__group}>
            {[...Array(5)].flatMap((_, idx1) =>
              dataArray.map((item, idx2) => (
                <div
                  key={`item-${idx1}-${idx2}`}
                  className={`${styles.icon_block} ${item.styleBlock}`}
                >
                  {item.icon}
                  <p className={styles.icon_block_text}>{item.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.marquee_2}>
          <div className={styles.marquee__group}>
          {[...Array(5)].flatMap((_, idx1) =>
              dataArray.map((item, idx2) => (
                <div
                  key={`item-${idx1}-${idx2}`}
                  className={`${styles.icon_block} ${item.styleBlock}`}
                >
                  {item.icon}
                  <p className={styles.icon_block_text}>{item.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalSlider;
