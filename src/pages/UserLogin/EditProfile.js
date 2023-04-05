import styles from './EditProfile.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { useState } from 'react';
import Button from '~/components/Button';
import { updateUserService } from '~/services/userService';
import Loading from '~/components/Loading/Loading';

const cx = classNames.bind(styles);

function EditProfile({ userInfo, setUserInfo }) {
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        nickName: userInfo.nickName,
        address: userInfo.address,
        phoneNumber: userInfo.phoneNumber,
    });
    const [avatarUpload, setAvatarUpload] = useState(null);

    //

    const handleUpload = () => {
        document.getElementById('input-upload-avatar').click();
    };
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const formData = new FormData();
    // formData.append('avatar', avatarUpload);
    formData.append('nickName', inputs.nickName);
    formData.append('address', inputs.address);
    formData.append('phoneNumber', inputs.phoneNumber);

    const handleSubmit = () => {
        setIsLoading(true);
        updateUserService(formData).then((res) => {
            if (res && res.errCode === 0) {
                setIsLoading(false);
                const userUpload = {
                    ...userInfo,
                    nickName: inputs.nickName,
                    phoneNumber: inputs.phoneNumber,
                    address: inputs.address,
                };
                setUserInfo(userUpload);
                localStorage.setItem('USER_LOG_IN', JSON.stringify(userUpload));
                window.location.reload();
            }
        });
    };
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const handleChangeInput = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarUpload(await getBase64(e.target.files[0]));
        }
    };

    return (
        <div className={cx('wrapper')}>
            {isLoading && <Loading />}
            <div className={cx('title')}>
                <div>Hồ sơ của tôi</div>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className={cx('body')}>
                <div className={cx('left')}>
                    <div className={cx('item')}>
                        <div>Tên đăng nhập</div>
                        <p>{userInfo && userInfo.nickName}</p>
                    </div>
                    <div className={cx('item')}>
                        <div>Tên</div>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                value={inputs.nickName}
                                placeholder={userInfo && userInfo.nickName}
                                name="nickName"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div>Email</div>
                        <p>{userInfo && userInfo.email}</p>
                    </div>
                    <div className={cx('item')}>
                        <div>Số điện thoại</div>
                        <div className={cx('input')}>
                            <input
                                type="number"
                                value={inputs.phoneNumber}
                                placeholder={userInfo && userInfo.phoneNumber}
                                name="phoneNumber"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div>Địa chỉ</div>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                value={inputs.address}
                                placeholder={userInfo && userInfo.address}
                                name="address"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                {/* avatar */}
                <div className={cx('right')}>
                    <Image src={avatarUpload ? avatarUpload : userInfo && userInfo.image} className={cx('image')} />
                    <button className={cx('btn-image')} onClick={handleUpload}>
                        Chọn ảnh
                    </button>
                    <input
                        type="file"
                        id="input-upload-avatar"
                        className={cx('input-upload')}
                        onChange={handleChangeInput}
                    />
                    <p>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
                </div>
            </div>
            <div className={cx('btn')}>
                <Button primary className={cx('btn-save')} onClick={handleSubmit}>
                    Lưu
                </Button>
            </div>
        </div>
    );
}

export default EditProfile;
