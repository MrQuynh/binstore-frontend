function HeaderNav() {
    return (
        <nav class="header__navbar hide-on-mobile-tablet">
            <ul class="header__navbar-list">
                <li class="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                    Vào cửa hàng Mr Bin trên ứng dụng
                    {/* <!-- header qr code --> */}
                    <div class="header__qr">
                        <img src="./assets/img/quynh.png" alt="QR Code" class="header__qr-img" />
                        <div class="header__qr-apps">
                            <a href="/" class="header__qr-link">
                                <img
                                    src="./assets/img/google_play.png"
                                    alt="Google Play"
                                    class="header__qr-download-img"
                                />
                            </a>
                            <a href="/" class="header__qr-link">
                                <img src="./assets/img/appstore.png" alt="App Store" class="header__qr-download-img" />
                            </a>
                        </div>
                    </div>
                </li>
                <div class="separate"></div>
                <li class="header__navbar-item">
                    <span class="header__navbar-title--no-pointer">Kết nối</span>
                    <a href="https://www.facebook.com/quynh232000/" class="header__navbar-icon-link">
                        <i class="header__navbar-icon fa-brands fa-facebook"></i>
                    </a>
                    <a href="/" class="header__navbar-icon-link">
                        <i class="header__navbar-icon fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <ul class="header__navbar-list">
                <li class="header__navbar-item header__navbar-item--has-notify">
                    <a href="/" class="header__navbar-item-link">
                        <i class="header__navbar-icon far fa-bell"></i> Thông báo
                    </a>
                    {/* <!-- header notification --> */}
                    <div class="header__notify">
                        <header class="header__notify-header">
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul class="header__notify-list">
                            <li class="header__notify-item header__notify-item--viewed">
                                <a href="/" class="header__notify-link">
                                    <img
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        class="header__notify-img"
                                    />
                                    <div class="header__notify-info">
                                        <span class="header__notify-name">Mỹ phẩm Ohui chính hãng</span>
                                        <span class="header__notify-discription">Mô tả mỹ phẩm ohui chính hãng</span>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notify-item">
                                <a href="/" class="header__notify-link">
                                    <img
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        class="header__notify-img"
                                    />
                                    <div class="header__notify-info">
                                        <span class="header__notify-name">Mỹ phẩm Ohui chính hãng</span>
                                        <span class="header__notify-discription">Mô tả mỹ phẩm ohui chính hãng</span>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notify-item header__notify-item--viewed">
                                <a href="/" class="header__notify-link">
                                    <img
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        class="header__notify-img"
                                    />
                                    <div class="header__notify-info">
                                        <span class="header__notify-name">Mỹ phẩm Ohui chính hãng</span>
                                        <span class="header__notify-discription">Mô tả mỹ phẩm ohui chính hãng</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer class="header__notify-footer">
                            <a href="/" class="header__notify-footer-btn">
                                Xem tất cả
                            </a>
                        </footer>
                    </div>
                </li>
                <li class="header__navbar-item">
                    <a href="/" class="header__navbar-item-link">
                        <i class="header__navbar-icon far fa-circle-question"></i> Trợ giúp
                    </a>
                </li>
                {/* <!-- <li class="header__navbar-item header__navbar-item--strong ">Đăng kí</li>
                        <div class="separate"></div>
                        <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li> --> */}
                <li class="header__navbar-item header__navbar-user">
                    <img
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/277175683_487071783151213_3569723600506585216_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TZyELTPlvqQAX9mLhcj&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-93sQJB0oKXd2-2Erp17HiIk-55VfY3dMbCm5EHQ5ryw&oe=624FB891"
                        alt=""
                        class="header__navbar-user-img"
                    />
                    <span class="header__navbar-user-name">JuJo Bin</span>

                    <ul class="header__navbar-user-menu">
                        <li class="header__navbar-user-menu-item">
                            <a href="/">Tài khoản của tôi</a>{' '}
                        </li>
                        <li class="header__navbar-user-menu-item">
                            <a href="/">Địa chỉ của tôi</a>{' '}
                        </li>
                        <li class="header__navbar-user-menu-item">
                            {' '}
                            <a href="/">Đơn mua</a>{' '}
                        </li>
                        <li class="header__navbar-user-menu-item header__navbar-user-menu-item-saparate">
                            <a href="/">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
