import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

const cx = classNames.bind(styles);

function HomeBanner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}></div>
            <div className={cx('box-right')}></div>
        </div>
    );
}

export default HomeBanner;
