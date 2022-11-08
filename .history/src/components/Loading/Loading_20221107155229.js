import React from 'react';
import ReactLoading from 'react-loading';
import { list } from './generic';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Loading = () => (
    <div className={cx('wrapper')}>
        {list.map((l, index) => (
            <div key={index} className={cx('body')}>
                <ReactLoading type={l.prop} color="#fff" />
            </div>
        ))}
    </div>
);

export default Loading;
