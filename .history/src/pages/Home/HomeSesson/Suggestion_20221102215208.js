import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Suggestion.module.scss';

const cx = classNames.bind(styles);

function Suggestion() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Giợi ý hôm nay</div>
                <div className={cx('s-nav')}>
                    <span className={cx('nav-item')}>Độc quyền</span>
                    <span className={cx('nav-item')}>ĐTop tìm kiếm</span>
                    <span className={cx('nav-item')}>Đòng giá 299K</span>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
