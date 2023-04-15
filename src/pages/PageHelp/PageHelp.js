import classNames from 'classnames/bind';
import styles from './PageHelp.module.scss';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';
import Image from '~/components/Image/Image';
import { AiFillPhone, AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';

const cx = classNames.bind(styles);

function PageHelp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('banner_wrapper')}>
                    <div className={cx('top-title')}>Xin chào, BinShop có thể giúp gì cho bạn?</div>
                    <div className={cx('top-body')}>
                        <div className={cx('top-input-body')}>
                            <input
                                className={cx('top-input')}
                                type="text"
                                placeholder="Nhập từ khóa hoặc nội dung cần tìm"
                            />
                        </div>
                        <div className={cx('top-icon-body')}>
                            <AiOutlineSearch className={cx('top-icon')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('help-menu')}>
                        <div className={cx('help-title')}>Danh mục</div>
                        <div className={cx('menu-body')}>
                            {/* item */}
                            <div className={cx('menu-item')}>
                                <div className={cx('menu-image-body')}>
                                    <Image
                                        className={cx('menu-image')}
                                        src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png"
                                    />
                                </div>
                                <div className={cx('menu-text')}>Mua sắm cùng BinShop</div>
                            </div>
                            {/* item */}
                            <div className={cx('menu-item')}>
                                <div className={cx('menu-image-body')}>
                                    <Image
                                        className={cx('menu-image')}
                                        src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png"
                                    />
                                </div>
                                <div className={cx('menu-text')}>Mua sắm cùng BinShop</div>
                            </div>
                            {/* item */}
                            <div className={cx('menu-item')}>
                                <div className={cx('menu-image-body')}>
                                    <Image
                                        className={cx('menu-image')}
                                        src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png"
                                    />
                                </div>
                                <div className={cx('menu-text')}>Mua sắm cùng BinShop</div>
                            </div>
                            {/* item */}
                            <div className={cx('menu-item')}>
                                <div className={cx('menu-image-body')}>
                                    <Image
                                        className={cx('menu-image')}
                                        src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png"
                                    />
                                </div>
                                <div className={cx('menu-text')}>Mua sắm cùng BinShop</div>
                            </div>
                            {/* item */}
                            <div className={cx('menu-item')}>
                                <div className={cx('menu-image-body')}>
                                    <Image
                                        className={cx('menu-image')}
                                        src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png"
                                    />
                                </div>
                                <div className={cx('menu-text')}>Mua sắm cùng BinShop</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('question')}>
                        <div className={cx('help-title')}>Câu hỏi thường gặp</div>
                        <div className={cx('question-list')}>
                            {/* item question */}
                            <div className={cx('question-item')}>
                                [Thành viên mới] Cách theo dõi tình trạng vận chuyển của đơn hàng?
                            </div>
                            {/* item question */}
                            <div className={cx('question-item')}>
                                [Thành viên mới] Quy trình trả hàng hoàn tiền của BinShop
                            </div>
                            {/* item question */}
                            <div className={cx('question-item')}>
                                [Đơn hàng] Tôi phải làm gì nếu đơn hàng bị cập nhật sai trạng thái/chưa nhận được hàng?
                            </div>
                            {/* item question */}
                            <div className={cx('question-item')}>
                                [Thông tin vận chuyển] Làm sao để liên hệ Đơn vị vận chuyển/tra cứu thông tin vận
                                chuyển/hối giao hàng?
                            </div>
                            {/* item question */}
                            <div className={cx('question-item')}>
                                [Cảnh báo lừa đảo] Nên và không nên làm để tránh nhận phải đơn hàng ảo/giả mạo
                            </div>
                        </div>
                    </div>
                    <div className={cx('more')}>
                        <div className={cx('more-title')}>Bạn có muốn tìm thêm thông tin gì không?</div>
                        <div className={cx('more-body')}>
                            {/* iteim */}
                            <div className={cx('more-item')}>
                                <div className={cx('more-icon-body')}>
                                    <AiFillPhone className={cx('more-icon')} />
                                </div>
                                <div className={cx('more-text')}>19001000</div>
                            </div>
                            {/* iteim */}
                            <div className={cx('more-item')}>
                                <div className={cx('more-icon-body')}>
                                    <AiOutlineMail className={cx('more-icon')} />
                                </div>
                                <div className={cx('more-text')}>19001000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PageHelp;
