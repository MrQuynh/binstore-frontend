import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const [state, dispatch] = useStore();
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    let link = data.to;
    let handleClick = onClick;
    if (data.id === 4) {
        link = '/';
        handleClick = () => {
            localStorage.setItem('IS_LOGIN', JSON.stringify(false));
            localStorage.setItem('USER_LOG_IN', JSON.stringify(null));
            localStorage.setItem('TOKEN', JSON.stringify(null));
            window.location.reload();
        };
    }
    if (data.type === 'language') {
        console.log(data);
        handleClick = (data) => {
            dispatch(actions.setLanguage(data.code));
            localStorage.setItem('LANGUAGE', JSON.stringify(data.code));
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
