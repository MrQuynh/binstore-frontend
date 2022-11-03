import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('one-column')}>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className={cx('footer-end')}>© 2022 Create by Bin / Connect me in facebook: JuJo Bin</div>
        </div>
    );
}

export default Footer;
