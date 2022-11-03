import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Banner from '../components/Banner';
import Footer from '~/pages/Home/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ medium, children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Banner />
                <div className={cx('body')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
