function HeaderCart() {
    return (
        <div class="header__cart">
            <div class="header__cart-wrap">
                <i class="header__cart-icon fa-solid fa-cart-shopping"></i>
                <span class="header__cart-noti">3</span>

                {/* <!-- no cart :: header__cart-list--no-cart --> */}
                <div class="header__cart-list ">
                    <img src="./assets/img/a1.PNG" alt="" class="header__cart-no-cart-img" />
                    <span class="header__cart-list--no-cart-smg">Chưa có sản phẩm</span>

                    <p class="header__cart-heading">Sản phẩm đã thêm</p>
                    <ul class="header__cart-list-item">
                        {/* <!-- cart item --> */}
                        <li class="header__cart-item">
                            <img src="./assets/img/a1.PNG" alt="" class="header__cart-img" />
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">
                                        Giay sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK Giay
                                        sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK
                                    </h5>
                                    <div class="header__cart-item-price-wrap">
                                        <span class="header__cart-item-price">2.000.000$</span>
                                        <span class="header__cart-item-multiple">x</span>
                                        <span class="header__cart-item-qnt">2</span>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">San pham cao cap nhap khau</span>
                                    <span class="header__cart-item-remmove">Xóa</span>
                                </div>
                            </div>
                        </li>
                        <li class="header__cart-item">
                            <img src="./assets/img/a1.PNG" alt="" class="header__cart-img" />
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">Giay sneaker 45TK</h5>
                                    <div class="header__cart-item-price-wrap">
                                        <span class="header__cart-item-price">2.000.000$</span>
                                        <span class="header__cart-item-multiple">x</span>
                                        <span class="header__cart-item-qnt">2</span>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">San pham cao cap nhap khau</span>
                                    <span class="header__cart-item-remmove">Xóa</span>
                                </div>
                            </div>
                        </li>
                        <li class="header__cart-item">
                            <img src="./assets/img/a1.PNG" alt="" class="header__cart-img" />
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">Giay sneaker 45TK</h5>
                                    <div class="header__cart-item-price-wrap">
                                        <span class="header__cart-item-price">2.000.000$</span>
                                        <span class="header__cart-item-multiple">x</span>
                                        <span class="header__cart-item-qnt">2</span>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">San pham cao cap nhap khau</span>
                                    <span class="header__cart-item-remmove">xóa</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="" class="header__cart-view-cart btn btn--primary">
                        Xem giỏ hàng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderCart;
