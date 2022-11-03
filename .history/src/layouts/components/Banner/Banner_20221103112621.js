import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('direct')}>
                    <ol>
                        <li className={cx('direct-active')}>Trang chủ</li>
                        <li>/ Điện thoại</li>
                        <li>/ Apple(Iphone)</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Banner;
