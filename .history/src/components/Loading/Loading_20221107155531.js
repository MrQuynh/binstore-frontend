import React from 'react';
import ReactLoading from 'react-loading';
import { list } from './generic';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Loading = () => (
    <div className={cx('wrapper')}>
        <ReactLoading type="bars" color="#fff" />
        {/* {list.map((l, index) => (
            <div key={index} className={cx('body')}>
                
            </div>
        ))} */}
    </div>
);

export default Loading;
