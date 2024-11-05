import { NavLink } from 'react-router-dom'
import './PartAnswers.css'
import React from 'react'

function PartAnswers() {
    let prevElemAnswer
    let prevBtnAnswer
    let prevAnswer

    function handleShowAnswer(e) {
        if (prevAnswer != e.target.closest('.ans')) {
            prevElemAnswer != undefined ? prevElemAnswer.classList.remove('ans__a_active') : false
            prevBtnAnswer != undefined ? prevBtnAnswer.classList.remove('ans__btn_active') : false
            prevElemAnswer = e.target.closest('.ans').querySelector('.ans__a')
            prevAnswer = e.target.closest('.ans')
            prevBtnAnswer = e.target.closest('.ans').querySelector('.ans__btn')
            e.target.closest('.ans').querySelector('.ans__a').classList.add('ans__a_active')
            e.target.closest('.ans').querySelector('.ans__btn').classList.add('ans__btn_active')
        } else {
            e.target.closest('.ans').querySelector('.ans__btn').classList.remove('ans__btn_active')
            e.target.closest('.ans').querySelector('.ans__a').classList.remove('ans__a_active')
            prevElemAnswer = undefined
            prevBtnAnswer = undefined
            prevAnswer = undefined
        }
    }

    return (
        <>
            <div className="anses">
                <div className="ans" onClick={handleShowAnswer}>
                    <div className="ans__q hover7">
                        <h4 className="ans__header">За какое минимальное время можно получить заказ?</h4>
                        <button className="ans__btn" >+</button>
                    </div>
                    <p className="ans__a">Мы можем подготовить любой заказ в заданные сроки, но заказ должен поступить не ранее, чем за 24 часа.</p>
                </div>
                <div className="ans" onClick={handleShowAnswer}>
                    <div className="ans__q hover7">
                        <h4 className="ans__header">Как долго будет доставка?</h4>
                        <button className="ans__btn" >+</button>
                    </div>
                    <p className="ans__a">У нас множество сладов по всей МО, поэтому доставку выполняем за 1 час.</p>
                </div>
                <div className="ans" onClick={handleShowAnswer}>
                    <div className="ans__q hover7">
                        <h4 className="ans__header">Как происходит оплата?</h4>
                        <button className="ans__btn" >+</button>
                    </div>
                    <p className="ans__a">Вы подбираете нужные позиции, мы уточняем наличие на складах и Вы оплачиваете. <NavLink to='/delivery_payment'>Подробнее о способах оплаты.</NavLink></p>
                </div>
                <div className="ans" onClick={handleShowAnswer}>
                    <div className="ans__q hover7">
                        <h4 className="ans__header">Как с Вами связаться?</h4>
                        <button className="ans__btn" >+</button>
                    </div>
                    <p className="ans__a">Для связи с менеджерами в тг: <a href="https://t.me/mywear" target='_blank'>@mywear</a> и <a href="https://t.me/my_wear_bot" target='_blank'>@my_wear_bot</a>. Для связи с руководством в тг: <a href="https://t.me/mokwar" target='_blank'>@mokwar</a></p>
                </div>
            </div>
        </>
    )
}

export default PartAnswers