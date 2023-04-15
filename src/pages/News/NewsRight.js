import classNames from 'classnames/bind';
import styles from './NewsRight.module.scss';
import { useState } from 'react';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function NewsRight() {
    return (
        <div className={cx('wrapper')}>
            {/* top */}
            <div className={cx('contain')}>
                <div className={cx('top-title')}>Xen nhiều</div>
                <div className={cx('top-body')}>
                    <div className={cx('top-list')}>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num', 'top-num-active')}>1</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>2</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>3</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>4</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>5</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>6</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top-item')}>
                            <div className={cx('top-num')}>7</div>
                            <div className={cx('top-text')}>
                                Trên tay Redmi Note 12: Chiếc smartphone tầm trung với màn hình 120Hz, bộ xử lý
                                Snapdragon 685 mới, giá rẻ bất ngờ chỉ 4.99 triệu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card */}
            <div className={cx('contain')}>
                <div className={cx('top-title')}>Sản phẩm mới</div>
                <div className={cx('top-list')}>
                    {/* card item  */}
                    <div className={cx('card-item')}>
                        <div className={cx('card-image-body')}>
                            <Image
                                className={cx('card-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/25//638153361034412976_samsung-galaxy-a54-5g-dd-moi.jpg"
                            />
                        </div>
                        <div className={cx('card-info')}>
                            <div className={cx('card-info-title')}>OPPO Find N2 Flip</div>
                            <div className={cx('card-info-post')}>19 bài viết</div>
                        </div>
                    </div>
                    {/* card item  */}
                    <div className={cx('card-item')}>
                        <div className={cx('card-image-body')}>
                            <Image
                                className={cx('card-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/25//638153361034412976_samsung-galaxy-a54-5g-dd-moi.jpg"
                            />
                        </div>
                        <div className={cx('card-info')}>
                            <div className={cx('card-info-title')}>OPPO Find N2 Flip</div>
                            <div className={cx('card-info-post')}>19 bài viết</div>
                        </div>
                    </div>
                    {/* card item  */}
                    <div className={cx('card-item')}>
                        <div className={cx('card-image-body')}>
                            <Image
                                className={cx('card-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/25//638153361034412976_samsung-galaxy-a54-5g-dd-moi.jpg"
                            />
                        </div>
                        <div className={cx('card-info')}>
                            <div className={cx('card-info-title')}>OPPO Find N2 Flip</div>
                            <div className={cx('card-info-post')}>19 bài viết</div>
                        </div>
                    </div>
                    {/* card item  */}
                    <div className={cx('card-item')}>
                        <div className={cx('card-image-body')}>
                            <Image
                                className={cx('card-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/25//638153361034412976_samsung-galaxy-a54-5g-dd-moi.jpg"
                            />
                        </div>
                        <div className={cx('card-info')}>
                            <div className={cx('card-info-title')}>OPPO Find N2 Flip</div>
                            <div className={cx('card-info-post')}>19 bài viết</div>
                        </div>
                    </div>
                    {/* card item  */}
                    <div className={cx('card-item')}>
                        <div className={cx('card-image-body')}>
                            <Image
                                className={cx('card-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/25//638153361034412976_samsung-galaxy-a54-5g-dd-moi.jpg"
                            />
                        </div>
                        <div className={cx('card-info')}>
                            <div className={cx('card-info-title')}>OPPO Find N2 Flip</div>
                            <div className={cx('card-info-post')}>19 bài viết</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsRight;
