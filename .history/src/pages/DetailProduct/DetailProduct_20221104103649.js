import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillCar, AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiCurrentLocation, BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { GrAddCircle, GrFormSubtract } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Footer from '../Home/Footer/Footer';

import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);
const listComments = [
    {
        name: 'Phạm Thị Ngọc',
        comment: 'Cho mình hỏi mua trả thẳng quét vnpay và mở thẻ TPBank EVo sẽ giảm được tối đa 1.6 triệu phải k ạ',
        image: 'https://i.pinimg.com/originals/87/f2/6f/87f26f03b9326f2cd85d9399ed403ab5.jpg',
    },
    {
        name: 'Văn Đại',
        comment: 'Cho mình hỏi mua trả thẳng quét vnpay và mở thẻ TPBank EVo sẽ giảm được tối đa 1.6 triệu phải k ạ',
        image: 'https://cdn.pixabay.com/photo/2020/03/17/12/01/vietnam-4940054_1280.jpg',
    },
];

function DetailProduct() {
    const [questionActive, setQuestionActive] = useState(false);
    const [listCmt, setListCmt] = useState(listComments);
    console.log(listCmt);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-detail')}>
                    <div className={cx('direct')}>
                        <ol>
                            <Link to="/">
                                <li className={cx('direct-active')}>Trang chủ</li>
                            </Link>
                            <Link to="/phone">
                                <li className={cx('direct-active')}>/ Điện thoại</li>
                            </Link>
                            <li>/ Apple(Iphone)</li>
                        </ol>
                    </div>
                    <div className={cx('header-info')}>
                        <h2 className={cx('header-info-name')}>iPad Pro 11 2021 M1 Wi-Fi 128GB </h2>
                        <div className={cx('header-info-right')}>
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />

                            <p className={cx('header-info-vote')}>123 đánh giá</p>
                            <p>345 Hỏi & Đáp</p>
                        </div>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('body-left')}>
                        <div>
                            <div className={cx('product')}>
                                <div className={cx('product-image')}>
                                    <div className={cx('title-sale-product')}>Săn sale - giảm giá</div>
                                    <div className={cx('p-image-body')}>
                                        <Image
                                            className={cx('p-image')}
                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                        />
                                    </div>
                                    <div className={cx('image-footer')}>
                                        <div className={cx('image-footer-btn')}>
                                            GIẢM <p>3.000.000Đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <div className={cx('more-info')}>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />
                                                Snapdragon 8
                                            </span>
                                            <p>
                                                <BiMobileAlt className={cx('more-info-icon')} />
                                                6.1 inch
                                            </p>
                                        </div>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />8 GB
                                            </span>
                                            <p>
                                                <BsCpu className={cx('more-info-icon')} />
                                                120 GB
                                            </p>
                                        </div>
                                        <div className={cx('more-info-detail')}>Xem chi tiết thông tin thông số</div>
                                    </div>
                                    <div className={cx('product-driver')}>
                                        <AiFillCar className={cx('product-driver-icon')} />
                                        <span>Hàng chính hãng - bảo hành 12 tháng</span>
                                        <AiFillCar className={cx('product-driver-icon')} />
                                        <span>Giao hàng toàn quốc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('body-right')}>
                        <div className={cx('price-body')}>
                            <div className={cx('price-left')}>
                                19.999.000đ <span>22.999.000đ</span>
                            </div>
                            <div className={cx('price-right')}>
                                <p>Trả góp chỉ từ</p>
                                <p>
                                    <strong> 1.506.00đ</strong>/tháng
                                </p>
                            </div>
                        </div>
                        <div className={cx('option-body')}>
                            <div className={cx('option-item', 'radio-active')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" checked="checked" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                            <div className={cx('option-item')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                            <div className={cx('option-item')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                        </div>
                        <div className={cx('box-promo')}>
                            <div className={cx('box-promo-item')}>
                                <p>Chọn 1 trong 2 khuyến mãi sau</p>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" checked="checked" />
                                    <label>Giảm ngay 3.000.000đ áp dụng đến 03/11 </label>
                                </div>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" />
                                    <label>Trả góp 0% </label>
                                </div>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <p className={cx('box-promo-item-uu-dai')}>Ưu đãi thêm</p>
                                <div className={cx('box-promo-item-body')}>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>Tặng PMH 500.000đ mua Apple Pencil 2 </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>
                                            Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu (SmartExchange){' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>
                                        </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>
                                            Tặng PMH 100.000đ mua Microsoft 365 Personal/Family{' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('btn-buy-now')}>
                                <div className={cx('btn-buy-now-big')}>MUA NGAY</div>
                                <div>Giao hàng miễn phí hoặc nhận tại shop</div>
                            </div>
                            <div className={cx('btn-gop')}>
                                <div className={cx('btn-buy-now', 'btn-gop-item')}>
                                    <div className={cx('btn-buy-now-big')}>TRẢ GÓP</div>
                                    <div>Duyệt nhanh qua điện thoại</div>
                                </div>
                                <div className={cx('btn-buy-now', 'btn-gop-item')}>
                                    <div className={cx('btn-buy-now-big')}>TRẢ GÓP QUA THẺ</div>
                                    <div>Visa, Master Card, JCB, AMEX</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('connect')}>
                            <div className={cx('connect-left')}>
                                Gọi <span>09123</span> để được tư vấn mua hàng (Miễn phí)
                            </div>
                            <div className={cx('connect-right')}>
                                <BiCurrentLocation className={cx('connect-icon')} />
                                Tìm shop có hàng gần nhất
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('question')}>
                    <h2 className={cx('question-title')}>Câu hỏi thường gặp</h2>
                    <div className={cx('list-question')}>
                        {/* list question */}
                        <div className={cx('question-item')}>
                            <div className={cx('question-item-left')}>
                                <div className={cx('question-content')}>
                                    <AiOutlineQuestionCircle className={cx('question-icon')} />
                                    Pin iPhone 13 Pro Max dung lượng bao nhiêu?
                                </div>
                                {questionActive && (
                                    <div className={cx('question-more-info')}>
                                        iPhone 13 Pro Max được trang bị viên pin dung lượng 4.352 mAh – mức cao chưa
                                        từng có mà một chiếc iPhone từng sở hữu. Đây là cải tiến vượt bậc mà chiếc điện
                                        thoại đem lại so với các thế hệ tiền nhiệm, hứa hẹn thời lượng sử dụng vượt trội
                                        so với mọi phiên bản còn lại thuộc iPhone 13 series.
                                    </div>
                                )}
                            </div>

                            <div
                                className={cx('question-item-right')}
                                onClick={() => setQuestionActive(!questionActive)}
                            >
                                {!questionActive ? (
                                    <GrAddCircle className={cx('question-icon')} />
                                ) : (
                                    <GrFormSubtract className={cx('question-icon')} />
                                )}
                            </div>
                        </div>
                        <div className={cx('question-item')}>
                            <div className={cx('question-item-left')}>
                                <div className={cx('question-content')}>
                                    <AiOutlineQuestionCircle className={cx('question-icon')} />
                                    Màu Xanh lá của iPhone 13 Pro Max có gì khác iPhone 13?
                                </div>
                                {questionActive && (
                                    <div className={cx('question-more-info')}>
                                        Màu Xanh lá của iPhone 13 Pro Max có gì khác iPhone 13?
                                    </div>
                                )}
                            </div>

                            <div
                                className={cx('question-item-right')}
                                onClick={() => setQuestionActive(!questionActive)}
                            >
                                {!questionActive ? (
                                    <GrAddCircle className={cx('question-icon')} />
                                ) : (
                                    <GrFormSubtract className={cx('question-icon')} />
                                )}
                            </div>
                        </div>
                        <div className={cx('question-item')}>
                            <div className={cx('question-item-left')}>
                                <div className={cx('question-content')}>
                                    <AiOutlineQuestionCircle className={cx('question-icon')} />
                                    Camera iPhone 13 Pro Max có gì khác iPhone 13 Pro?
                                </div>
                                {questionActive && (
                                    <div className={cx('question-more-info')}>
                                        Không, bộ đôi iPhone 13 Pro Max và iPhone 13 Pro không cho thấy sự chênh lệch
                                        nào về thông số camera. Bạn sẽ tìm thấy trên hai thiết bị này hệ thống gồm
                                        camera chính 12MP khẩu độ F/1.5, camera tele 12MP khẩu độ F/2.8, camera góc siêu
                                        rộng 12MP khẩu độ F/1.8 và camera TOF 3D LiDAR.
                                    </div>
                                )}
                            </div>

                            <div
                                className={cx('question-item-right')}
                                onClick={() => setQuestionActive(!questionActive)}
                            >
                                {!questionActive ? (
                                    <GrAddCircle className={cx('question-icon')} />
                                ) : (
                                    <GrFormSubtract className={cx('question-icon')} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('comment')}>
                    <div className={cx('comment-title')}>Hỏi & Đáp</div>
                    <div className={cx('comment-box')}>
                        <textarea
                            className={cx('comment-text-input')}
                            placeholder="Nhập nội dung bình luận..."
                        ></textarea>
                        <div className={cx('comment-send-btn')}>Gửi bình luận</div>
                    </div>
                    <div className={cx('count-comment')}>
                        <strong>5523 hỏi đáp về</strong> “iPhone 13 Pro Max 128GB”
                    </div>
                    <div className={cx('list-comment')}>
                        {listComments.map((item, index) => {
                            <div className={cx('user-comment')} key={index}>
                                <Image className={cx('user-avatar')} src={item.image} />
                                <di className={cx('user-info')}>
                                    <p className={cx('user-name')}>{item.name}</p>
                                    <div className={cx('text-comment')}>{item.comment}</div>
                                    <div className={cx('user-info-time')}>
                                        <p>10 giờ trước</p> <span>Thích</span>
                                        <span>Trả lời</span>
                                    </div>
                                </di>
                            </div>;
                        })}
                        <div className={cx('user-comment')}>
                            <Image className={cx('user-avatar')} src="" />
                            <di className={cx('user-info')}>
                                <p className={cx('user-name')}>dfgdfg</p>
                                <div className={cx('text-comment')}>dfgdf</div>
                                <div className={cx('user-info-time')}>
                                    <p>10 giờ trước</p> <span>Thích</span>
                                    <span>Trả lời</span>
                                </div>
                            </di>
                        </div>
                        ;
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
