import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeBXH.module.scss';

const cx = classNames.bind(styles);

function HomeBXH() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('image')}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199039669299_icon-desktop-1.png"
            />
            <Image
                className={cx('image')}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/4/637584199040294624_icon-desktop.png"
            />
            <Image
                className={cx('image')}
                src="https://images.fpt.shop/unsafe/fit-in/394x115/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/5/12/637248776517146629_f-friends.png"
            />
        </div>
    );
}

export default HomeBXH;
