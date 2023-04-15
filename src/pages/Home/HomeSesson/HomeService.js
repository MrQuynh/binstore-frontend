import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeService.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomeService() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>DỊCH VỤ TIỆN ÍCH</div>
                <Link to="/dich-vu">
                    <div className={cx('body')}>
                        <div className={cx('item', 'green')}>
                            <Image
                                className={cx('image')}
                                src="https://fptshop.com.vn/Content/v5d/images/ic-water.png"
                            />
                            <div className={cx('content')}>
                                <div>Thanh toán tiền nước</div>
                                <p> Thanh toán nhanh chóng tiện lợi</p>
                            </div>
                        </div>
                        <div className={cx('item', 'orange')}>
                            <Image
                                className={cx('image')}
                                src="https://fptshop.com.vn/Content/v5d/images/service-item2.png"
                            />
                            <div className={cx('content')}>
                                <div>Thanh toán tiền điện</div>
                                <p>Thanh toán nhanh chóng tiện lợi</p>
                            </div>
                        </div>
                        <div className={cx('item', 'blue')}>
                            <Image
                                className={cx('image')}
                                src="https://fptshop.com.vn/Content/v5d/images/service-item3.png"
                            />
                            <div className={cx('content')}>
                                <div>Thẻ cào điện thoại</div>
                                <p>
                                    <span className={cx('discount')}>Giảm 2%</span> cho thẻ mệnh giá từ 100.000Đ
                                </p>
                            </div>
                        </div>
                        <div className={cx('item', 'red')}>
                            <Image
                                className={cx('image')}
                                src="https://fptshop.com.vn/Content/v5d/images/ic-credit-card.png"
                            />
                            <div className={cx('content')}>
                                <div>Thẻ game</div>
                                <p>
                                    <span className={cx('discount')}>Giảm 2%</span> cho thẻ mệnh giá từ 100.000Đ
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeService;
