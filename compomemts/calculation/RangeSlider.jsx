import React from 'react';
import styles from '../../style/RangeSlider.module.scss';

const RangeSlider = ({ value, onChange, min = 1, max = 50, page}) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <>
      <p style={{paddingBottom: '15px'}}>{page.Calculator.Number_of_pages}</p>
        <div className={styles["range-slider"]}>
          <div className={styles.track} />
          <div
            className={styles["filled-track"]}
            style={{ width: `${percentage}%` }}
          />
          <div
            className={styles.thumb}
            style={{ left: `${percentage}%` }}
            onMouseDown={(e) => e.preventDefault()}
          />
          <input
            type="range"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            className={styles["hidden-input"]}
          />
        </div>
        <p style={{paddingTop: '15px'}}>{page.Calculator.Number_of_pages_value}: {value}</p>
      </>
    );
};

export default RangeSlider;
