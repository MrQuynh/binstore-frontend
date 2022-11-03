import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeService.module.scss';

const cx = classNames.bind(styles);

function HomeService() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>DỊCH VỤ TIỆN ÍCH</div>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <Image className={cx('image')} />
                        <div className={cx('content')}>
                            <div>Thanh toán tiền nước</div>
                            <p> Thanh toán nhanh chóng tiện lợi</p>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <Image className={cx('image')} />
                        <div className={cx('content')}>
                            <div>Thanh toán tiền điện</div>
                            <p>Thanh toán nhanh chóng tiện lợi</p>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <Image className={cx('image')} />
                        <div className={cx('content')}>
                            <div>TThẻ cào điện thoại</div>
                            <p>
                                <span className={cx('discount')}>Giảm 2%</span> cho thẻ mệnh giá từ 100.000Đ
                            </p>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <Image className={cx('image')} />
                        <div className={cx('content')}>
                            <div>Thẻ game</div>
                            <p>
                                <span className={cx('discount')}>Giảm 2%</span> cho thẻ mệnh giá từ 100.000Đ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeService;
