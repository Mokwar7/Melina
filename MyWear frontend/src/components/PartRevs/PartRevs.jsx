import { NavLink } from 'react-router-dom'
import '../PartRevs/PartRevs.css'

function PartRevs() {
    return (
        <>
            <div className="rev">
                <div className="rev__header">
                    <h4 className="rev__name">Надя</h4>
                    <p className="rev__score">4.8<span className="color_orange">&#9734;</span></p>
                </div>
                <ul className="rev__pluses">
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка сервиса</p>
                        <p className="rev__count">5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка доставки</p>
                        <p className="rev__count">4.5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка кроссовок</p>
                        <p className="rev__count">5/5</p>
                    </li>
                </ul>
                <p className="rev__text">
                    Все понравилось, пришло быстро, скоро буду обращаться еще 😋
                </p>
            </div>
            <div className="rev">
                <div className="rev__header">
                    <h4 className="rev__name">Даниил</h4>
                    <p className="rev__score">4.9<span className="color_orange">&#9734;</span></p>
                </div>
                <ul className="rev__pluses">
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка сервиса</p>
                        <p className="rev__count">5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка доставки</p>
                        <p className="rev__count">5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка кроссовок</p>
                        <p className="rev__count">5/5</p>
                    </li>
                </ul>
                <p className="rev__text">
                    Все четко, быстро и вовремя 🤍
                </p>
            </div>
            <div className="rev">
                <div className="rev__header">
                    <h4 className="rev__name">Максим</h4>
                    <p className="rev__score">4.7<span className="color_orange">&#9734;</span></p>
                </div>
                <ul className="rev__pluses">
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка сервиса</p>
                        <p className="rev__count">5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка доставки</p>
                        <p className="rev__count">5/5</p>
                    </li>
                    <li className="rev__plus">
                        <p className="rev__arg">Оценка кроссовок</p>
                        <p className="rev__count">4/5</p>
                    </li>
                </ul>
                <p className="rev__text">
                    Доставили точно в срок. Все, что заказал, было качественно поглажено и ухожено, рекомендую.
                </p>
            </div>
        </>
    )
}

export default PartRevs