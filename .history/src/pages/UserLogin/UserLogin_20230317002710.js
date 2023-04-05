import classNames from 'classnames/bind';
// import { userInfo } from 'os';
import { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { BiNotepad, BiStore } from 'react-icons/bi';
import { BsCoin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { useStore } from '~/hooks';
import { bookingStatus } from '~/services/productService';
import BookingProduct from './BookingProduct';
import EditProfile from './EditProfile';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);

const listIcon = [
    { id: 0, icon: <AiOutlineUser className={cx('list-title-icon')} />, title: 'Tài khoản của tôi' },
    { id: 1, icon: <AiOutlineBell className={cx('list-title-icon')} />, title: 'Thông báo' },
    { id: 2, icon: <BiNotepad className={cx('list-title-icon')} />, title: 'Đơn hàng' },
    { id: 3, icon: <BiStore className={cx('list-title-icon')} />, title: 'Kho Voucher' },
    { id: 4, icon: <BsCoin className={cx('list-title-icon')} />, title: 'Xu' },
];

function UserLogin() {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('USER_LOG_IN')));
    const [status, setStatus] = useState('S1');
    const [listBooking, setListBooking] = useState('');
    const [updateDom, setUpdateDom] = useState('');
    const [state, dispatch] = useStore();

    useEffect(() => {
        bookingStatus(status).then((res) => {
            res.errCode === 0 && setListBooking(res.data.reverse());
        });
    }, [status, updateDom]);
    const [activeIcon, setActiveIcon] = useState(state.activeUserRedux);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('info')}>
                        <Image
                            className={cx('avatar')}
                            src={
                                JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                JSON.parse(localStorage.getItem('USER_LOG_IN')).image
                            }
                        />
                        <div className={cx('info-icon')}>
                            <div className={cx('name')}>
                                {JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                    JSON.parse(localStorage.getItem('USER_LOG_IN')).nickName}
                            </div>
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
                            onClick={() => {
                                setActiveIcon(item.id);
                            }}
                        >
                            {item.icon} {item.title}
                        </div>
                    ))}
                </div>
                <div className={cx('right')}>
                    {activeIcon === 0 && <EditProfile userInfo={userInfo} setUserInfo={setUserInfo} />}
                    {activeIcon === 1 && <div>hello</div>}
                    {activeIcon === 2 && (
                        <BookingProduct listBooking={listBooking} setUpdateDom={setUpdateDom} setStatus={setStatus} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
