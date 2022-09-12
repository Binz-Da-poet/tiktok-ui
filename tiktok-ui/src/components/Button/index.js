import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, lefticon, primary, outline, rounded, textType, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        textType,
        rounded,
        ...passProps,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
