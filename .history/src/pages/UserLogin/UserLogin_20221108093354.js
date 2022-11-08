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
    { id: 0, icon: <AiOutlineBell className={cx('list-title-icon')} />, title: 'Thông báo' },
    { id: 0, icon: <BiNotepad className={cx('list-title-icon')} />, title: 'Đơn mua' },
    { id: 0, icon: <BiStore className={cx('list-title-icon')} />, title: 'Kho lưu trữ' },
    { id: 0, icon: <BsCoin className={cx('list-title-icon')} />, title: 'Xu' },
];
function UserLogin() {
    const [activeIcon, setActiveIcon] = useState(1);
    const handleActiveIcon = (id) => {
        setActiveIcon(id);
    };
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
                            onClick={() => handleActiveIcon(item.id)}
                        >
                            {item.icon} {item.title}
                        </div>
                    ))}
                </div>
                <div className={cx('right')}>right</div>
            </div>
        </div>
    );
}

export default UserLogin;
