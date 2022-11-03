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
                        <li>Giới thiệu về công ty</li>
                        <li>Câu hỏi thường gặp mua hàng</li>
                        <li>Chính sách bảo mật</li>
                        <li>Quy chế hoạt động</li>
                        <li>Kiểm tra hóa đơn điện tử</li>
                    </ul>
                </div>
                <div className={cx('one-column')}>
                    <ul>
                        <li>Tin tuyển dụng</li>
                        <li>Tin khuyến mãi</li>
                        <li>Hướng dẫn mua online</li>
                        <li>Hướng dẫn mua trả góp</li>
                    </ul>
                </div>
                <div className={cx('one-column')}>
                    <ul>
                        <li>Hệ thống cửa hàng</li>
                        <li>Hệ thống bảo hành</li>
                        <li>Bán hàng doanh nghiệp</li>
                        <li>Giới thiệu máy đổi trả</li>
                        <li>Chính sách đổi trả</li>
                    </ul>
                </div>
                <div className={cx('one-column')}>
                    <div className={cx('colum-title')}>Tư vấn mua hàng(Miễn phí)</div>
                    <div className={cx('colum-phone')}>
                        0123 456 <span>(Nhánh 1)</span>
                    </div>
                    <div className={cx('colum-title')}>Tư vấn kĩ thuật</div>
                    <div className={cx('colum-phone')}>654321</div>
                    <div className={cx('colum-title')}>Hỗ trợ thanh toán</div>
                </div>
                <div className={cx('one-column')}>
                    <div className={cx('colum-title')}>Góp ý, khiếu nại dịch vụ (8h00-22h00)</div>
                    <div className={cx('colum-phone')}>65989321</div>
                    <div className={cx('test')}></div>
                </div>
            </div>
            <div className={cx('footer-end')}>
                © 2022 Create by Bin / Connect me on facebook:
                <a href="https://www.facebook.com/quynh232000/">JuJo Bin</a>
            </div>
        </div>
    );
}

export default Footer;
