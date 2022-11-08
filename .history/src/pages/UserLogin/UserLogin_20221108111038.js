import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillEdit, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { BiNotepad, BiStore } from 'react-icons/bi';
import { BsCoin } from 'react-icons/bs';
import Image from '~/components/Image';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);

const listIcon = [
    { id: 0, icon: <AiOutlineUser className={cx('list-title-icon')} />, title: 'Tài khoản của tôi' },
    { id: 1, icon: <AiOutlineBell className={cx('list-title-icon')} />, title: 'Thông báo' },
    { id: 2, icon: <BiNotepad className={cx('list-title-icon')} />, title: 'Đơn mua' },
    { id: 3, icon: <BiStore className={cx('list-title-icon')} />, title: 'Kho lưu trữ' },
    { id: 4, icon: <BsCoin className={cx('list-title-icon')} />, title: 'Xu' },
];
function UserLogin() {
    const [activeIcon, setActiveIcon] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('info')}>
                        <Image className={cx('avatar')} src="" />
                        <div className={cx('info-icon')}>
                            <div className={cx('name')}>jujo bin</div>
                            <div className={cx('edit')}>
                                <AiFillEdit />
                                Sửa hồ sơ
                            </div>
                        </div>
                    </div>
                    {listIcon.map((item, index) => (
                        <div
                            className={cx('list-title', activeIcon === index && 'icon-active')}
                            key={index}
                            onClick={() => setActiveIcon(item.id)}
                        >
                            {item.icon} {item.title}
                        </div>
                    ))}
                </div>
                <div className={cx('right')}>
                    <div className={cx('nav')}>
                        <div>Tất cả</div>
                        <div className={cx('nav-active')}>Chờ xác nhận</div>
                        <div>Chờ lấy hàng</div>
                        <div>Đang giao</div>
                        <div>Đã giao</div>
                        <div>Đã hủy</div>
                    </div>
                    <div className={cx('right-body')}>
                        {/* <div>
                            <Image src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" />
                            <p>Chưa Có đơn hàng nào</p>
                        </div> */}
                        <div className={cx('right-product')}>
                            <div className={cx('product-item')}>
                                <Image src="" className={cx('product-image')} />
                                <div className={cx('product-info')}>
                                    <p>iphone 12 promax</p>
                                    <span>12.000.000d</span>
                                </div>
                            </div>
                            <div className={cx('product-item')}>
                                {JSON.parse(localStorage.getItem('USER_LOG_IN'))}
                                <Image
                                    src={
                                        JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                        JSON.parse(localStorage.getItem('USER_LOG_IN')).image
                                    }
                                    className={cx('product-image')}
                                />
                                <div className={cx('product-info')}>
                                    <p>iphone 12 promax</p>
                                    <span>12.000.000d</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
