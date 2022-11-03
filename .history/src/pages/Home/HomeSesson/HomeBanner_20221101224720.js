import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

const cx = classNames.bind(styles);

function HomeBanner() {
    return <div className={cx('wrapper')}>banner</div>;
}

export default HomeBanner;
