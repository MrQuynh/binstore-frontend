import { useEffect, useRef, useState } from 'react';
import { AiFillCar, AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiCurrentLocation, BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { GrAddCircle, GrFormSubtract } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import Image from '~/components/Image';

import ModalBuy from '~/components/ModalEdit/ModalBuy';
import Footer from '../Home/Footer/Footer';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { getAProductService } from '~/services/adminService';
// import TawkTo from 'tawkto-react';
import ModalOverlay from '~/components/ModalOverlay';
import { createAComments, deleteAComment, getAllCode, getAllComments } from '~/services/productService';
import moment from 'moment';
import { FiMoreVertical } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import FormatPrice from '~/components/FormatPrice/FormatPrice';
import ProductViewed from '~/layouts/components/ProductViewed/ProductViewed';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function DetailProduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
        // var tawk = new TawkTo('636909afdaff0e1306d626f5', '1gh94rm5f');

        // tawk.onStatusChange((status) => {});
    }, []);
    const [questionActive, setQuestionActive] = useState(false);
    const [valueCmt, setValueCmt] = useState('');
    const [isModal, setIsModal] = useState(false);
    const match = useLocation();
    const query = new URLSearchParams(match.search);
    const idProduct = query.get('id');
    const [infoProduct, setInfoProduct] = useState('');
    const [seeMore, setSeeMore] = useState(false);
    const [listComments, setListComments] = useState('');
    const [changeListComments, setChangeListComments] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const urlCurrent = window.location.pathname;
    const [state, dispatch] = useStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalCMT, setTotalCMT] = useState(0);

    useEffect(() => {
        getAProductService(idProduct).then((data) => {
            if (data && data.errCode === 0) {
                setInfoProduct(data.data);
                dispatch(actions.setProductViewedRedux(data.data));
            }
        });
        window.scrollTo(0, 0, 'smooth');
    }, [idProduct]);
    useEffect(() => {
        getAllComments(idProduct, currentPage).then((data) => {
            if (data && data.errCode === 0) {
                setListComments(data.data);
                setTotalPage(data.pagination?.totalPage);
                setTotalCMT(data.pagination?.total);
                console.log('page', data.pagination?.total);
            }
        });
    }, [idProduct, currentPage, changeListComments]);
    // all code
    const [codeGroup, setCodeGroup] = useState('');
    const [codeBrain, setCodeBrain] = useState('');
    useEffect(() => {
        getAllCode('group').then((data) => {
            data && data.errCode === 0 && setCodeGroup(data.data);
        });
        getAllCode('brain').then((data) => data && data.errCode === 0 && setCodeBrain(data.data));
    }, []);

    const handleSendCmt = () => {
        if (valueCmt) {
            createAComments({ productId: idProduct, comment: valueCmt }).then((data) => {
                if (data.errCode === 0) {
                    setListComments((prev) => [
                        {
                            comment: valueCmt,
                            userId: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.id || '',
                            createdAt: moment.now(),
                            userData: {
                                image: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.image || '',
                                nickName: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.nickName || '',
                            },
                        },
                        ...prev,
                    ]);
                    setValueCmt('');
                }
            });
        }
    };

    const [isLogin, setIsLogin] = useState(false);
    const handleByNow = () => {
        setIsModal(true);
        let list = JSON.parse(localStorage.getItem('CART_LISTS'));
        if (list) {
            list.push(infoProduct);
            localStorage.setItem('CART_LISTS', JSON.stringify(list));
        } else {
            localStorage.setItem('CART_LISTS', JSON.stringify([infoProduct]));
        }
    };
    const handleLogin = () => {
        setIsLogin(true);
    };
    // comment
    const handleDeleteComment = (item, index) => {
        deleteAComment(item.id).then((data) => {
            if (data && data.errCode === 0) {
                setChangeListComments(Math.random());
                let newArr = listComments.splice(index, 1);
                setListComments(newArr);
            }
        });
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (valueCmt) {
                createAComments({ productId: idProduct, comment: valueCmt }).then((data) => {
                    if (data.errCode === 0) {
                        setListComments((prev) => [
                            {
                                comment: valueCmt,
                                userId: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.id || '',
                                createdAt: moment.now(),
                                userData: {
                                    image: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.image || '',
                                    nickName: JSON.parse(localStorage.getItem('USER_LOG_IN'))?.nickName || '',
                                },
                            },
                            ...prev,
                        ]);
                        setValueCmt('');
                    }
                });
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            {isModal && <ModalBuy setIsModal={setIsModal} infoProduct={infoProduct} />}
            {isLogin && <ModalOverlay setLogin={setIsLogin} />}
            <div className={cx('container')}>
                <div className={cx('header-detail')}>
                    <div className={cx('direct')}>
                        <ol>
                            <Link to="/">
                                <li className={cx('direct-active')}>Trang chủ</li>
                            </Link>
                            <Link to={'/' + infoProduct?.group}>
                                <li className={cx('direct-active')}>
                                    / {codeGroup && codeGroup.find((item) => item.keyMap === infoProduct?.group)?.value}
                                </li>
                            </Link>
                            <li>
                                / {codeBrain && codeBrain.find((item) => item.keyMap === infoProduct?.brain)?.value}
                            </li>
                        </ol>
                    </div>
                    <div className={cx('header-info')}>
                        <h2 className={cx('header-info-name')}>{infoProduct && infoProduct.name} </h2>
                        <div className={cx('header-info-right')}>
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />

                            <p className={cx('header-info-vote')}>
                                123 <FormattedMessage id="detail.vote" />
                            </p>
                            <p>
                                345 <FormattedMessage id="detail.aq" />
                            </p>
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
                                        <Image className={cx('p-image')} src={infoProduct?.image} />
                                    </div>
                                    <div className={cx('image-footer')}>
                                        <div className={cx('image-footer-btn')}>
                                            GIẢM <p>{infoProduct && infoProduct.sale}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <div className={cx('more-info')}>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />
                                                {infoProduct && infoProduct.card}
                                            </span>
                                            <p>
                                                <BiMobileAlt className={cx('more-info-icon')} />
                                                {infoProduct && infoProduct?.screen}
                                            </p>
                                        </div>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />
                                                {infoProduct && infoProduct.rom} GB
                                            </span>
                                            <p>
                                                <BsCpu className={cx('more-info-icon')} />
                                                {infoProduct && infoProduct.ram} GB
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
                                {infoProduct && <FormatPrice price={infoProduct.priceDown} />}
                                <span>{infoProduct && <FormatPrice price={infoProduct.priceUp} />}</span>
                            </div>
                            <div className={cx('price-right')}>
                                <p>
                                    <FormattedMessage id="detail.pay" />
                                </p>
                                <p>
                                    <strong> 1.506.00đ</strong>/<FormattedMessage id="detail.month" />
                                </p>
                            </div>
                        </div>
                        {infoProduct && infoProduct.ram !== 'null' && (
                            <div className={cx('option-body')}>
                                <div className={cx('option-item', 'radio-active')}>
                                    <div className={cx('price-radio')}>
                                        <input type="radio" defaultChecked="checked" name="gb" value="16" />
                                        <label>{infoProduct && infoProduct.ram}</label>
                                    </div>
                                    <span>{infoProduct && <FormatPrice price={infoProduct.priceDown} />}</span>
                                </div>
                                <div className={cx('option-item')}>
                                    <div className={cx('price-radio')}>
                                        <input type="radio" value="128" name="gb" disabled />
                                        <label>128GB</label>
                                    </div>
                                    <span>{infoProduct && <FormatPrice price={infoProduct.priceUp} />}</span>
                                </div>
                                {/* <div className={cx('option-item')}>
                                    <div className={cx('price-radio')}>
                                        <input type="radio" name="gb" disabled />
                                        <label>1TB</label>
                                    </div>
                                    <span>{infoProduct && <FormatPrice price={infoProduct.priceUp} />}</span>
                                </div> */}
                            </div>
                        )}

                        <div className={cx('box-promo')}>
                            <div className={cx('box-promo-item')}>
                                <p>
                                    <FormattedMessage id="detail.choose" />
                                </p>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" defaultChecked="checked" name="sale" />
                                    <label>Giảm ngay 3.000.000đ áp dụng đến 03/11 </label>
                                </div>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" name="sale" />
                                    <label>Trả góp 0% </label>
                                </div>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <p className={cx('box-promo-item-uu-dai')}>
                                    <FormattedMessage id="detail.moreOption" />
                                </p>
                                <div className={cx('box-promo-item-body')}>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" name="1" id="1" value="1" defaultChecked="checked" />
                                        <label>Tặng PMH 500.000đ mua Apple Pencil 2 </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" name="1" id="2" value="2" defaultChecked="checked" />
                                        <label>
                                            Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu (SmartExchange){' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>
                                        </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" name="1" id="3" value="3" defaultChecked="checked" />
                                        <label>
                                            Tặng PMH 100.000đ mua Microsoft 365 Personal/Family{' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('btn-buy-now')} onClick={handleByNow}>
                                <div className={cx('btn-buy-now-big')}>
                                    <FormattedMessage id="detail.buy" />
                                </div>
                                <div>
                                    <FormattedMessage id="detail.freeShip" />
                                </div>
                            </div>
                            <div className={cx('btn-gop')}>
                                <Link
                                    to={`${urlCurrent}/${idProduct}/tra-gop`}
                                    className={cx('btn-buy-now', 'btn-gop-item')}
                                >
                                    {/* <div className={cx('btn-buy-now', 'btn-gop-item')}> */}
                                    <div className={cx('btn-buy-now-big')}>
                                        <FormattedMessage id="detail.installment" />
                                    </div>
                                    <div>
                                        <FormattedMessage id="detail.onPhone" />
                                    </div>
                                    {/* </div> */}
                                </Link>
                                <Link
                                    to={`${urlCurrent}/${idProduct}/tra-gop`}
                                    className={cx('btn-buy-now', 'btn-gop-item')}
                                >
                                    {/* <div className={cx('btn-buy-now', 'btn-gop-item')}> */}
                                    <div className={cx('btn-buy-now-big')}>
                                        <FormattedMessage id="detail.payOnVisa" />
                                    </div>
                                    <div>Visa, Master Card, JCB, AMEX</div>
                                    {/* </div> */}
                                </Link>
                            </div>
                        </div>
                        <div className={cx('connect')}>
                            <div className={cx('connect-left')}>
                                <FormattedMessage id="detail.call" /> <span>09123</span>{' '}
                                <FormattedMessage id="detail.advise" />
                            </div>
                            <div className={cx('connect-right')}>
                                <BiCurrentLocation className={cx('connect-icon')} />
                                <FormattedMessage id="detail.find" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('body-markdown', seeMore && 'body-markdown-full')}>
                    {/* <div className={cx('mark-left')}> */}
                    <div className={cx('mark-left')}>
                        {infoProduct && infoProduct.contentHTML && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: infoProduct.contentHTML,
                                }}
                                className={cx('mark-left-1')}
                            ></div>
                        )}
                        {infoProduct && infoProduct.contentHTML && !seeMore && (
                            <div className={cx('see-more')}>
                                <p onClick={() => setSeeMore(true)}>Xem thêm</p>
                            </div>
                        )}
                    </div>
                    {/* </div> */}
                    <div className={cx('mark-right')}>
                        <p>
                            <FormattedMessage id="detail.specifications" />
                        </p>
                        <table>
                            <tbody>
                                {infoProduct && infoProduct.screen && (
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{infoProduct && infoProduct.screen}</td>
                                    </tr>
                                )}
                                {infoProduct && infoProduct.cpu && (
                                    <tr>
                                        <td>CPU</td>
                                        <td>{infoProduct && infoProduct.cpu}</td>
                                    </tr>
                                )}
                                {infoProduct && infoProduct.rom && (
                                    <tr>
                                        <td>ROM</td>
                                        <td>{infoProduct && infoProduct.rom}</td>
                                    </tr>
                                )}
                                {infoProduct && infoProduct.ram && (
                                    <tr>
                                        <td>RAM</td>
                                        <td>{infoProduct && infoProduct.ram}</td>
                                    </tr>
                                )}
                                {infoProduct && infoProduct.card && (
                                    <tr>
                                        <td>Đồ họa</td>
                                        <td>{infoProduct && infoProduct.card}</td>
                                    </tr>
                                )}
                                {infoProduct && infoProduct.origin && (
                                    <tr>
                                        <td>Xuất sứ</td>
                                        <td>{infoProduct && infoProduct.origin}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={cx('question')}>
                    <h2 className={cx('question-title')}>
                        <FormattedMessage id="detail.question" />
                    </h2>
                    <div className={cx('list-question')}>
                        {/* list question */}
                        <div className={cx('question-item')}>
                            <div className={cx('question-item-left')}>
                                <div className={cx('question-content')}>
                                    <AiOutlineQuestionCircle className={cx('question-icon')} />
                                    Pin {infoProduct && infoProduct.name} dung lượng bao nhiêu?
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
                                    Màu Xanh lá của {infoProduct && infoProduct.name} có gì khác iPhone 13?
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
                                    Camera {infoProduct && infoProduct.name} có gì khác iPhone 13 Pro?
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
                    <div className={cx('comment-title')}>
                        <FormattedMessage id="detail.AQ" />
                    </div>
                    <div className={cx('comment-box')}>
                        {JSON.parse(localStorage.getItem('USER_LOG_IN'))?.nickName ? (
                            <>
                                <textarea
                                    className={cx('comment-text-input')}
                                    value={valueCmt}
                                    onChange={(e) => setValueCmt(e.target.value)}
                                    placeholder="Nhập nội dung bình luận..."
                                    onKeyDown={handleKeyDown}
                                ></textarea>
                                <div className={cx('comment-send-btn')} onClick={handleSendCmt}>
                                    Gửi bình luận
                                </div>
                            </>
                        ) : (
                            <>
                                <textarea
                                    disabled
                                    className={cx('comment-text-input')}
                                    value={valueCmt}
                                    onChange={(e) => setValueCmt(e.target.value)}
                                    placeholder="Nhập nội dung bình luận..."
                                ></textarea>
                                <div className={cx('comment-send-btn')} onClick={handleLogin}>
                                    Đăng nhập
                                </div>
                            </>
                        )}
                    </div>
                    <div className={cx('count-comment')}>
                        <strong>{totalCMT} hỏi đáp về</strong> “{infoProduct && infoProduct.name}”
                    </div>
                    <div className={cx('list-comment')}>
                        {listComments &&
                            listComments?.length > 0 &&
                            listComments.map((item, index) => (
                                <div className={cx('user-comment')} key={index}>
                                    <Image className={cx('user-avatar')} src={item.userData.image} />
                                    <div className={cx('user-info')}>
                                        <p className={cx('user-name')}>{item.userData.nickName}</p>
                                        <div className={cx('text-comment')}>{item.comment}</div>
                                        <div className={cx('user-info-time')}>
                                            <p>{item && item.createdAt && moment(item.createdAt).fromNow()}</p>
                                            <span>Thích</span>
                                            <span>Trả lời</span>
                                        </div>
                                    </div>
                                    {JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                        JSON.parse(localStorage.getItem('USER_LOG_IN'))?.id === item?.userId && (
                                            <div className={cx('icon-remove')}>
                                                <FiMoreVertical
                                                    className={cx('delete-icon')}
                                                    onClick={() => setShowDelete(!showDelete)}
                                                />
                                                <p
                                                    className={cx(showDelete ? 'show-delete' : '')}
                                                    onClick={() => {
                                                        handleDeleteComment(item, index);
                                                        setShowDelete(false);
                                                    }}
                                                >
                                                    Xóa
                                                </p>
                                            </div>
                                        )}
                                </div>
                            ))}
                    </div>
                    <div className={cx('btn-cmt')}>
                        <div className={cx('s-nav-page')}>
                            <div
                                className={cx('s-nav-page-btn', currentPage === 1 && 'disable')}
                                onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
                            >
                                Prev
                            </div>
                            <div
                                className={cx('s-nav-page-btn', currentPage === totalPage && 'disable')}
                                onClick={() => currentPage < totalPage && setCurrentPage((prev) => prev + 1)}
                            >
                                Next
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductViewed />
            <Footer />
        </div>
    );
}

export default DetailProduct;
