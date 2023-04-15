import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { getAProductService } from '~/services/adminService';
import { getAllCode, getAllComments } from '~/services/productService';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Payment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const urlCurrent = window.location.pathname;
    const idProduct = urlCurrent.split('/')[3];
    const [infoProduct, setInfoProduct] = useState('');

    useEffect(() => {
        getAProductService(idProduct).then((data) => data && data.errCode === 0 && setInfoProduct(data.data));
    }, [idProduct]);

    // all code
    const [codeGroup, setCodeGroup] = useState('');
    useEffect(() => {
        getAllCode('group').then((data) => {
            data && data.errCode === 0 && setCodeGroup(data.data);
        });
        getAllCode('brain').then((data) => data && data.errCode === 0 && setCodeBrain(data.data));
    }, []);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header-detail')}>
                        <div className={cx('direct')}>
                            <ol>
                                <Link to="/">
                                    <li className={cx('direct-active')}>Trang chủ</li>
                                </Link>
                                <Link to={'/' + infoProduct?.group}>
                                    <li className={cx('direct-active')}>
                                        /{' '}
                                        {codeGroup &&
                                            codeGroup.find((item) => item.keyMap === infoProduct?.group)?.value}
                                    </li>
                                </Link>
                                <li>/Trả góp</li>
                            </ol>
                        </div>
                    </div>
                    <div className={cx('body')}>
                        {/* title  */}
                        <div className={cx('card-title')}>
                            <div className={cx('card-title-left')}>Mua trả góp</div>
                            <div className={cx('card-title-right')}>Chuyển về trả tháng</div>
                        </div>
                        {/* info product  */}
                        <div className={cx('card-info')}>
                            <div className={cx('info-image-body')}>
                                <Image
                                    className={cx('info-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg"
                                />
                            </div>
                            <div className={cx('info-body')}>
                                <div className={cx('info-name')}>Iphone 14 Pro Max 128GB</div>
                                <div className={cx('info-price')}>
                                    Giá sản phẩm <p>33.990.000đ</p>
                                </div>
                                <div className={cx('info-detail')}>Xem chi tiết khuyến mại</div>
                            </div>
                        </div>
                        {/* tab top */}
                        <div className={cx('tab-top')}>
                            <div className={cx('tab-title')}>Chọn hình thức trả góp qua</div>
                            <div className={cx('info-detail')}>Xem hướng dẫn</div>
                        </div>
                        {/* tab select */}
                        <div className={cx('tab-select')}>
                            {/* item */}
                            <div className={cx('select-item', 'select-item-active')}>
                                <div className={cx('select-item-body')}>
                                    <input name="select-tab" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Công ty tài chính</label>
                                </div>
                                <div className={cx('tab-select-text')}>Duyệt hồ sơ nhanh chóng</div>
                            </div>
                            {/* item */}
                            <div className={cx('select-item')}>
                                <div className={cx('select-item-body')}>
                                    <input name="select-tab" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Thẻ tín dụng</label>
                                </div>
                                <div className={cx('tab-select-text')}>Không cần xét duyệt</div>
                            </div>
                            {/* item */}
                            <div className={cx('select-item')}>
                                <div className={cx('select-item-body')}>
                                    <input name="select-tab" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Kredivo</label>
                                </div>
                                <div className={cx('tab-select-text')}>Mua trước trả sau</div>
                            </div>
                        </div>
                        {/* tab group */}
                        <div className={cx('tab-top')}>
                            <div className={cx('tab-title')}>Bạn muốn chọn gói trả góp</div>
                        </div>
                        <div className={cx('tab-select')}>
                            <div className={cx('tab-select-choose')}>
                                <div className={cx('select-item-body', 'mr-10')}>
                                    <input name="select-tab-2" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Theo đề xuất BinShop</label>
                                </div>
                                <div className={cx('select-item-body')}>
                                    <input name="select-tab-2" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Theo giấy tờ của bạn</label>
                                </div>
                            </div>
                        </div>
                        {/* tab group chon so thang*/}
                        <div className={cx('tab-top')}>
                            <div className={cx('tab-title')}>Bạn số tháng trả góp</div>
                        </div>
                        <div className={cx('tab-select')}>
                            <div className={cx('tab-select-choose')}>
                                <div className={cx('select-item-body', 'select-item-body-border')}>
                                    <input name="select-tab-month" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>6 tháng</label>
                                </div>
                                <div className={cx('select-item-body', 'select-item-body-border')}>
                                    <input name="select-tab-month" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>8 tháng</label>
                                </div>
                                <div className={cx('select-item-body', 'select-item-body-border')}>
                                    <input name="select-tab-month" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>9 tháng</label>
                                </div>
                                <div className={cx('select-item-body', 'select-item-body-border')}>
                                    <input name="select-tab-month" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>12 tháng</label>
                                </div>
                            </div>
                        </div>
                        {/* thong tin khach hang */}
                        <div className={cx('tab-top')}>
                            <div className={cx('tab-title')}>Thông tin khách hàng</div>
                        </div>
                        <div className={cx('tab-select')}>
                            <div className={cx('tab-select-choose')}>
                                <div className={cx('select-item-body', 'mr-10')}>
                                    <input name="select-tab-sex" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Anh</label>
                                </div>
                                <div className={cx('select-item-body')}>
                                    <input name="select-tab-sex" className={cx('tab-select-input')} type="radio" />
                                    <label className={cx('tab-select-label')}>Chị</label>
                                </div>
                            </div>
                        </div>
                        {/* info name */}
                        <div className={cx('tab-info')}>
                            <div className={cx('tab-input-body')}>
                                <input className={cx('tab-input')} type="text" placeholder="Nhập họ và tên" />
                            </div>
                            <div className={cx('tab-input-body')}>
                                <input className={cx('tab-input')} type="email" placeholder="Nhập email" />
                            </div>
                            <div className={cx('tab-input-body')}>
                                <input className={cx('tab-input')} type="number" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className={cx('tab-input-body')}>
                                <input className={cx('tab-input')} type="text" placeholder="Nhập số CMND/CCCD" />
                            </div>
                        </div>
                        <div className={cx('tab-btn')}>
                            <Button className={cx('btn-pay')}>Đăng kí trả góp</Button>
                        </div>
                        <div className={cx('tab-privacy')}>
                            Bằng cách thanh toán, bạn đồng ý với Điều khoản sử dụng của BinShop
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Payment;
