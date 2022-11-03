import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeBXH.module.scss';

const cx = classNames.bind(styles);

function HomeBXH() {
    return <div className={cx('wrapper')}></div>;
}

export default HomeBXH;
