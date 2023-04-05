import classNames from 'classnames/bind';
import styles from './AdminLogin.module.scss';
import Email from '~/components/ModalOverlay/LoginWith/Email';

const cx = classNames.bind(styles);

function AdminLogin() {
    return (
        <div>
            <Email />
        </div>
    );
}

export default AdminLogin;
