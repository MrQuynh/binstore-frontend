import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.phone" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/tv">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-screen.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.tivi" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/laptop ">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.laptop" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/pc">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.pc" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="tablet">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tablet.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.tablet" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/camera">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.camera" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/houseware">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.houseWare" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-apple.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.apple" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/Other/icon-samsung.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.samsung" />
                        </div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="apple-watch">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png"
                            />
                        </div>
                        <div className={cx('title')}>
                            <FormattedMessage id="home.watch" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeCategory;
