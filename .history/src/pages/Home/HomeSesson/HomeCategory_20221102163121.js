import classNames from 'classnames/bind';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return <div className={cx('wrapper')}></div>;
}

export default HomeCategory;
