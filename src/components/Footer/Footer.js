import Logo from '../Logo/Logo';
import classes from '../../../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <Logo />
        </footer>
    )
}
