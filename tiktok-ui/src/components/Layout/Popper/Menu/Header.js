import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <i className={cx('back-btn')} onClick={onBack}>
                <img className={cx('icon-back')} src={images.back} alt="Back" />
            </i>
            <p className={cx('header-title')}>{title}</p>
        </div>
    );
}

export default Header;
