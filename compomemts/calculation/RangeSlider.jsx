import React from 'react';
import styles from '../../style/RangeSlider.module.scss';

const RangeSlider = ({ value, onChange, min = 1, max = 50 }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={styles['range-slider']}>
            <div className={styles.track} />
            <div className={styles['filled-track']} style={{ width: `${percentage}%` }} />
            <div
                className={styles.thumb}
                style={{ left: `${percentage}%` }}
                onMouseDown={e => e.preventDefault()}
            />
            <input
                type="range"
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                className={styles['hidden-input']}
            />
        </div>
    );
};

export default RangeSlider;
