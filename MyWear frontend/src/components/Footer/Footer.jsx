import { NavLink } from 'react-router-dom'
import './Footer.css'
import tgLogo from '../../source/images/tg_logo.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__section footer__logo-section">
                    <NavLink to="/" className="header__logo hover7"></NavLink>
                    <p className="footer__copyright">© 2023 Mokwar Shop · Все права защищены</p>
                </div>
                <nav className="footer__section">
                    <h4 className="footer__name-section">Навигация</h4>
                    <NavLink className="footer__link hover7" to='/catalog'>Каталог</NavLink>
                    <NavLink className="footer__link hover7" to='/contacts'>Контакты</NavLink>
                    <NavLink className="footer__link hover7" to='/delivery_payment'>Доставка и оплата</NavLink>
                </nav>
                <nav className="footer__section">
                    <h4 className="footer__name-section">Документы</h4>
                    <NavLink className="footer__link hover7">Политика конфидециальности</NavLink>
                    <NavLink className="footer__link hover7">Пользовательское соглашение</NavLink>
                    <NavLink className="footer__link hover7">Куки на нашем сайте</NavLink>
                </nav>
                <nav className="footer__section">
                    <h4 className="footer__name-section">Социальные сети</h4>
                    <div className="footer__socials">
                        <NavLink className="footer__link" to='https://t.me/mokwar'><img src={tgLogo} alt="телеграм" className="footer__img" /></NavLink>
                    </div>
                </nav>

            </div>
        </footer>
    )
}

export default Footer