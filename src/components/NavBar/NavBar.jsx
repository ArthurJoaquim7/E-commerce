// import { useState } from 'react';


import search from '../img/search.png';
import cart from '../img/cart.png';
import user from '../img/user.png';
import { Link } from 'react-router-dom';
import waveTop from '../img/waveTop.png'

import style from '../NavBar/NavBar.module.css'

export const NavBar = ({ size, handleCart }) => {
    // const [input, setInput] = useState('')
    return (
        <div>
            <div className={style.header}>
                <img src={waveTop} className={style.waveTop2} />
                <Link to='/' className={style.toHome}>
                    <h2>Fake <span className='color3'>Store</span></h2>
                </Link>
                <form className={style.headerMid}>
                    {/* <img src={search} className={style.search} /> */}
                    {/* <input
                        type="search"
                        name="name"
                        value={input}
                        onChange={({ target }) => setInput(target.value)}
                        className={style.input}
                        placeholder="What are you buying?"
                        required /> */}
                </form>
                <div className={style.headerEnd}>
                    <img src={search} className={style.iconHeader} />
                    <img src={user} className={style.iconHeader} />
                    <div className={style.cartDiv} onClick={handleCart}>
                        <img src={cart} className={style.cartIcon} />
                        <div className={style.back}><p>{size}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
