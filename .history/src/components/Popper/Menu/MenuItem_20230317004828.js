import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    let link = data.to;
    let handleClick = onClick;

    // if (data.title === 'Đăng xuất') {
    if (data.id === 4) {
        link = '/';
        handleClick = () => {
            localStorage.setItem('IS_LOGIN', JSON.stringify(false));
            localStorage.setItem('USER_LOG_IN', JSON.stringify(null));
            localStorage.setItem('TOKEN', JSON.stringify(null));
            window.location.reload();
        };
    }
    if (data.id === 2) {
        console.log(data);
        handleClick = (data) => {
            console.log(data);
        };
    }

    return (
        <Button className={classes} leftIcon={data.icon} to={link} onClick={() => handleClick(data)}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
