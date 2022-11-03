import classNames from 'classnames/bind';
import { GrCaretNext } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HomeGoldTime.module.scss';

const cx = classNames.bind(styles);

function HomeGoldTime() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('flash')}>
                    <h2>Giờ vàng giá Sốc</h2>
                    <span>
                        Xem thể lệ <GrCaretNext className={cx('flash-icon')} />
                    </span>
                </div>
                <div className={cx('flash-date')}>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item', 'flash-date-active')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                </div>
                <div className={cx('flash-product')}>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/12/28/637131195786706449_0091L02.jpg"
                            />
                            <div className={cx('product-sale')}>Giảm 90%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGoldTime;
