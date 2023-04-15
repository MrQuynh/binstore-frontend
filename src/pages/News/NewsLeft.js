import classNames from 'classnames/bind';
import styles from './NewsLeft.module.scss';
import { useState } from 'react';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function NewsLeft() {
    return (
        <div className={cx('wrapper')}>
            {/* top */}
            <div className={cx('contain')}>
                <div className={cx('top')}>
                    <div className={cx('top_left')}>
                        <div className={cx('top_left-image-body')}>
                            <Image
                                className={cx('top_left-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/490x326/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/8/638165525642034168_5-ly-do-nang-cap-galaxy-a54-5g-10.jpg"
                            />
                        </div>
                        <div className={cx('top_left-text')}>
                            5 điểm cộng thuyết phục của Samsung Galaxy A54 5G - Tiên phong chống rung OIS xịn hết ý
                        </div>
                        <div className={cx('top_left-time')}>0 - 1 ngày trước</div>
                    </div>
                    {/* list item */}
                    <div className={cx('top_right')}>
                        {/* item */}
                        <div className={cx('top_item')}>
                            <div className={cx('top_item-image-body')}>
                                <Image
                                    className={cx('top_item-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/7/638164608419908740_061a2590.jpg"
                                />
                            </div>
                            <div className={cx('top_item-body')}>
                                <div className={cx('top_item-text')}>
                                    Chỉ còn 1 ngày đặt trước OPPO Find N2 Flip, đặt ngay để nhận quà tặng hấp dẫn!
                                </div>
                                <div className={cx('top_right-time')}>0 - 2 ngày trước</div>
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top_item')}>
                            <div className={cx('top_item-image-body')}>
                                <Image
                                    className={cx('top_item-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/7/638164608419908740_061a2590.jpg"
                                />
                            </div>
                            <div className={cx('top_item-body')}>
                                <div className={cx('top_item-text')}>
                                    Chỉ còn 1 ngày đặt trước OPPO Find N2 Flip, đặt ngay để nhận quà tặng hấp dẫn!
                                </div>
                                <div className={cx('top_right-time')}>0 - 2 ngày trước</div>
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top_item')}>
                            <div className={cx('top_item-image-body')}>
                                <Image
                                    className={cx('top_item-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/7/638164608419908740_061a2590.jpg"
                                />
                            </div>
                            <div className={cx('top_item-body')}>
                                <div className={cx('top_item-text')}>
                                    Chỉ còn 1 ngày đặt trước OPPO Find N2 Flip, đặt ngay để nhận quà tặng hấp dẫn!
                                </div>
                                <div className={cx('top_right-time')}>0 - 2 ngày trước</div>
                            </div>
                        </div>
                        {/* item */}
                        <div className={cx('top_item')}>
                            <div className={cx('top_item-image-body')}>
                                <Image
                                    className={cx('top_item-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/7/638164608419908740_061a2590.jpg"
                                />
                            </div>
                            <div className={cx('top_item-body')}>
                                <div className={cx('top_item-text')}>
                                    Chỉ còn 1 ngày đặt trước OPPO Find N2 Flip, đặt ngay để nhận quà tặng hấp dẫn!
                                </div>
                                <div className={cx('top_right-time')}>0 - 2 ngày trước</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card */}
            <div className={cx('contain')}>
                {/* list item card */}
                <div className={cx('card')}>
                    {/* item card*/}
                    <div className={cx('card_item')}>
                        <div className={cx('card_item-image-body')}>
                            <Image
                                className={cx('card_item-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/9/638166664520578693_dsc07539.JPG"
                            />
                        </div>
                        <div className={cx('card_item-info')}>
                            <div className={cx('card_title')}>Tin mới</div>
                            <div className={cx('card-special')}>
                                HaloChat là gì? Cách chat với người lạ ẩn danh trên Messenger bằng HaloChat
                            </div>
                            <div className={cx('card-text')}>
                                Chỉ với một chiếc điện thoại, bạn có thể trò chuyện với tất cả mọi người, thậm chí là
                                người lạ không nằm trong danh sách bạn bè của mình trên Messenger thông qua HaloChat.
                            </div>
                            <div className={cx('card_user')}>
                                <div className={cx('card_user-image-body')}>
                                    <Image
                                        className={cx('card_user-image')}
                                        src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/26/638023799944535285_z3830051132221_1a7b17b73a31298fe82169e7c119db8b.jpg"
                                    />
                                </div>
                                <div className={cx('card-time')}>Diễm - 3 giờ trước</div>
                            </div>
                        </div>
                    </div>
                    {/* item card*/}
                    <div className={cx('card_item')}>
                        <div className={cx('card_item-image-body')}>
                            <Image
                                className={cx('card_item-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/9/638166664520578693_dsc07539.JPG"
                            />
                        </div>
                        <div className={cx('card_item-info')}>
                            <div className={cx('card_title')}>Tin mới</div>
                            <div className={cx('card-special')}>
                                HaloChat là gì? Cách chat với người lạ ẩn danh trên Messenger bằng HaloChat
                            </div>
                            <div className={cx('card-text')}>
                                Chỉ với một chiếc điện thoại, bạn có thể trò chuyện với tất cả mọi người, thậm chí là
                                người lạ không nằm trong danh sách bạn bè của mình trên Messenger thông qua HaloChat.
                            </div>
                            <div className={cx('card_user')}>
                                <div className={cx('card_user-image-body')}>
                                    <Image
                                        className={cx('card_user-image')}
                                        src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/26/638023799944535285_z3830051132221_1a7b17b73a31298fe82169e7c119db8b.jpg"
                                    />
                                </div>
                                <div className={cx('card-time')}>Diễm - 3 giờ trước</div>
                            </div>
                        </div>
                    </div>
                    {/* item card*/}
                    <div className={cx('card_item')}>
                        <div className={cx('card_item-image-body')}>
                            <Image
                                className={cx('card_item-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/9/638166664520578693_dsc07539.JPG"
                            />
                        </div>
                        <div className={cx('card_item-info')}>
                            <div className={cx('card_title')}>Tin mới</div>
                            <div className={cx('card-special')}>
                                HaloChat là gì? Cách chat với người lạ ẩn danh trên Messenger bằng HaloChat
                            </div>
                            <div className={cx('card-text')}>
                                Chỉ với một chiếc điện thoại, bạn có thể trò chuyện với tất cả mọi người, thậm chí là
                                người lạ không nằm trong danh sách bạn bè của mình trên Messenger thông qua HaloChat.
                            </div>
                            <div className={cx('card_user')}>
                                <div className={cx('card_user-image-body')}>
                                    <Image
                                        className={cx('card_user-image')}
                                        src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/26/638023799944535285_z3830051132221_1a7b17b73a31298fe82169e7c119db8b.jpg"
                                    />
                                </div>
                                <div className={cx('card-time')}>Diễm - 3 giờ trước</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* form */}
                <div className={cx('form')}>
                    <div className={cx('form-contain')}>
                        <div className={cx('form-body')}>
                            <div className={cx('form-title')}>Trở thành người đầu tiên</div>
                            <div className={cx('form-title')}>nhận thông tin ưu đãi</div>
                            <div className={cx('form-group')}>
                                <div className={cx('radio-name')}>
                                    <input type="radio" name="sex" />
                                    <label>Anh</label>
                                </div>
                                <div className={cx('radio-name')}>
                                    <input type="radio" name="sex" />
                                    <label>Chị</label>
                                </div>
                            </div>
                            <div className={cx('form-group')}>
                                <div className={cx('form-group-body')}>
                                    <input className={cx('form-input')} type="text" placeholder="Nhập họ và tên" />
                                </div>
                                <div className={cx('form-group-body')}>
                                    <input className={cx('form-input')} type="text" placeholder="Nhập số điện thoại" />
                                </div>
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    className={cx('form-input', 'form-input-email')}
                                    type="text"
                                    placeholder="Nhập email(không bắt buộc)"
                                />
                            </div>

                            <div className={cx('form-group', 'form-group-email')}>
                                <input type="checkbox" />
                                <label className={cx('radio-email')}>Tôi đồng ý nhận thông tin ưu đãi qua Email</label>
                            </div>
                            <div className={cx('form-btn-body')}>
                                <Button className={cx('form-btn')} primary>
                                    Đăng kí
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('form-phone')}>
                        Gọi <p>0358 732 520</p> để được tư vấn (Miễn phí)
                    </div>
                </div>
                {/* item card*/}
                <div className={cx('card_item')}>
                    <div className={cx('card_item-image-body')}>
                        <Image
                            className={cx('card_item-image')}
                            src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/9/638166664520578693_dsc07539.JPG"
                        />
                    </div>
                    <div className={cx('card_item-info')}>
                        <div className={cx('card_title')}>Tin mới</div>
                        <div className={cx('card-special')}>
                            HaloChat là gì? Cách chat với người lạ ẩn danh trên Messenger bằng HaloChat
                        </div>
                        <div className={cx('card-text')}>
                            Chỉ với một chiếc điện thoại, bạn có thể trò chuyện với tất cả mọi người, thậm chí là người
                            lạ không nằm trong danh sách bạn bè của mình trên Messenger thông qua HaloChat.
                        </div>
                        <div className={cx('card_user')}>
                            <div className={cx('card_user-image-body')}>
                                <Image
                                    className={cx('card_user-image')}
                                    src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/26/638023799944535285_z3830051132221_1a7b17b73a31298fe82169e7c119db8b.jpg"
                                />
                            </div>
                            <div className={cx('card-time')}>Diễm - 3 giờ trước</div>
                        </div>
                    </div>
                </div>
                {/* item card*/}
                <div className={cx('card_item')}>
                    <div className={cx('card_item-image-body')}>
                        <Image
                            className={cx('card_item-image')}
                            src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/9/638166664520578693_dsc07539.JPG"
                        />
                    </div>
                    <div className={cx('card_item-info')}>
                        <div className={cx('card_title')}>Tin mới</div>
                        <div className={cx('card-special')}>
                            HaloChat là gì? Cách chat với người lạ ẩn danh trên Messenger bằng HaloChat
                        </div>
                        <div className={cx('card-text')}>
                            Chỉ với một chiếc điện thoại, bạn có thể trò chuyện với tất cả mọi người, thậm chí là người
                            lạ không nằm trong danh sách bạn bè của mình trên Messenger thông qua HaloChat.
                        </div>
                        <div className={cx('card_user')}>
                            <div className={cx('card_user-image-body')}>
                                <Image
                                    className={cx('card_user-image')}
                                    src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/26/638023799944535285_z3830051132221_1a7b17b73a31298fe82169e7c119db8b.jpg"
                                />
                            </div>
                            <div className={cx('card-time')}>Diễm - 3 giờ trước</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLeft;
