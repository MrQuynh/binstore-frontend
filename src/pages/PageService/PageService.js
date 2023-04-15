import classNames from 'classnames/bind';
import styles from './PageService.module.scss';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';
import Image from '~/components/Image/Image';
import { AiOutlineCreditCard, AiOutlineDatabase } from 'react-icons/ai';
import { BiGame, BiMoney } from 'react-icons/bi';
import { FcElectronics } from 'react-icons/fc';
import { BsFillTelephoneFill, BsFillTelephoneForwardFill, BsWater } from 'react-icons/bs';

const cx = classNames.bind(styles);

function PageService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('banner_wrapper')}>
                    <div className={cx('banner-image-body')}>
                        <Image
                            className={cx('banner-image')}
                            src="https://fptshop.com.vn/dich-vu/Content/Desktop/images/banner-object.png"
                        />
                    </div>
                    <div className={cx('banner_contain')}>
                        <div className={cx('banner-title')}>THANH TOÁN & TIỆN ÍCH</div>
                        <div className={cx('banner-text')}>
                            Giúp quý khách hàng dễ dàng tra cứu & thanh toán một cách đơn giản và nhanh chóng.
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    {/* list */}
                    <div className={cx('list')}>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <AiOutlineCreditCard className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Thẻ cào điện thoại</div>
                        </div>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BiGame className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Thẻ Game</div>
                        </div>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <AiOutlineDatabase className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Thẻ Data</div>
                        </div>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <FcElectronics className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Tiền điện</div>
                        </div>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BsWater className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Tiền nước</div>
                        </div>
                        {/* item */}
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BsWater className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Internet</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BsFillTelephoneFill className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Truyền hình cáp</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BsFillTelephoneForwardFill className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Điện thoại trả sau</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-body')}>
                                <BiMoney className={cx('item-icon')} />
                            </div>
                            <div className={cx('item-text')}>Trả góp</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PageService;
