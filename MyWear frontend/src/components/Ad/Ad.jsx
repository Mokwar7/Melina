import { NavLink } from 'react-router-dom'
import richMan from '../../source/images/ad-rich-man.webp'
import './Ad.css'

function Add() {
  return (
    <section className='ad'>
      <div className="ad__container">
        <div className="ad__txt">
          <h1 className="ad__header">Стиль</h1>
          <h2 className="ad__subheader">Подготовим все для важной встречи за 24 часа</h2>
          <NavLink to="/catalog" className="header__link hover7"><button className="ad__btn">Подробнее &gt;</button></NavLink>
        </div>
        <img src={richMan} alt="кроссовок, вид сбоку" className='ad__img' />
      </div>
    </section>
  )
}

export default Add