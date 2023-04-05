import styles from './BookingProduct.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { useState } from 'react';
import ModalConfirm from '~/components/ModalOverlay/ModalConfirm';

const cx = classNames.bind(styles);
const listStatus = [
    { id: 0, title: 'Đã đặt', status: 'S1' },
    { id: 1, title: 'Đang giao', status: 'S2' },
    { id: 2, title: 'Đã giao', status: 'S3' },
    { id: 3, title: 'Đã hủy', status: 'S4' },
];
function BookingProduct({ listBooking, setStatus }) {
    const [titleStatus, setTitleStatus] = useState(0);

    return (
        <>
            <ModalConfirm />
            <div className={cx('nav')}>
                {listStatus.map((item, index) => (
                    <div
                        className={cx('okok', index == titleStatus && 'nav-active')}
                        onClick={() => {
                            setTitleStatus(item.id);
                            setStatus(item.status);
                        }}
                        key={index}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <div className={cx('right-body')}>
                {listBooking && listBooking.length > 0 ? (
                    <div className={cx('right-product')}>
                        {listBooking &&
                            listBooking.length > 0 &&
                            listBooking.map((item, index) => (
                                <Link to={`/${item.productData.group}/${item.productData.name}/?id=${item.idProduct}`}>
                                    <div className={cx('product-item')} key={index}>
                                        <Image src={item.productData.image} className={cx('product-image')} />
                                        <div className={cx('product-info')}>
                                            <p>{item.productData.name}</p>
                                            <span>{item.productData.priceDown}đ</span>
                                        </div>
                                        <span className={cx('cancel')}>Hủy</span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                ) : (
                    <div>
                        <Image src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" />
                        <p>Chưa Có đơn hàng nào</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookingProduct;
