/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // 
import deletee from '../img/deletee.png';
import arrowR from '../img/arrowR.png';
import more from '../img/more.png';
import less from '../img/less.png';
import empty from '../img/empty.png';
import added from '../img/added.png';
import style from '../Cart/Cart.module.css'

// MOTION ==============
import { motion } from 'framer-motion'

export const Cart = ({ cart, setCart, handleCart, cartShow, setCartShow }) => {
    const [price, setPrice] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [amount, setAmount] = useState(1);
    const [itemQuantities, setItemQuantities] = useState({});
    const componentRef = useRef();


    // ==== Add +1
    const handleAdd = (itemId) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 0) + 1,
        }));
    };

    // ==== Remove -1
    const handleSubtract = (itemId) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 1),
        }));
    };
    // ==== Remove Cart
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };

    // ==============
    useEffect(() => {
        const initialQuantities = {};
        cart.forEach((item) => {
            initialQuantities[item.id] = 1; // ou qualquer valor inicial desejado
        });
        setItemQuantities(initialQuantities);
    }, [cart]);
    // ==============

    // ==== Function
    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => { 
            ans += itemQuantities[item.id] * item.price;
        });
        setPrice(ans);
    };

    // ==== Call
    useEffect(() => {
        handlePrice();
    }); 

    // Convertendo para número e limitando para 2 casas decimais
    const priceAsNumber = parseFloat(price);
    const priceFormatted = priceAsNumber.toFixed(2);


    // ===
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setCartShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // ==================
    const maxLength = 38;
    return (
        <>
            {cartShow && (
                <motion.div className={style.container} ref={componentRef}
                    initial={{ x: 500, height: '100vh' }}
                    animate={{ x: 0, height: '100vh' }}
                    transition={{ type: 'spring', duration: 0.3 }}
                    exit={{ x: 900 }}
                >
                    {/* ==ARROW== */}
                    <div className={style.arrowDiv}>
                        <motion.img src={arrowR} alt="image" className={style.arrow} onClick={handleCart}
                            initial={{ opacity: 0, y: -80, }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            exit={{ x: -900 }} />
                    </div>
                    {/* ==HEADER== */}
                    <div className={style.header}>
                        <img src={added} className={style.added} />
                        <h1>Produtos adicionados</h1>
                    </div>
                    {cart.length === 0 ? (
                        <motion.div className={style.emptyDiv}>
                            <img src={empty} alt="img" className={style.empty} />
                        </motion.div>
                    ) : (
                        cart.map((item) => (
                            <motion.div className={style.div} key={item.id}
                            >
                                <div className={style.calls}>
                                    <img src={item.image} className={style.img} />
                                    <div className={style.cardMidTitle}>
                                        <h3>{item.title.length > maxLength ? `${item.title.substring(0, maxLength)}...` : item.title}</h3>
                                        <p>{item.category}</p>
                                    </div>
                                    {/* BOTTUN */}
                                    <div className={style.button}>
                                        <img src={deletee} className={style.imgRemove} onClick={() => handleRemove(item.id)} />
                                        <div className={style.btnPrice}>
                                            <div className={style.divCount}>
                                                <img src={more} alt="" onClick={() => handleAdd(item.id)} className={style.count} />
                                                <div className={style.amountDiv}>
                                                    <p className={style.amount}>{itemQuantities[item.id]}</p>
                                                </div>
                                                <img src={less} alt="" onClick={() => handleSubtract(item.id)} className={style.count} />
                                            </div>
                                            <div>
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </motion.div>
                        ))
                    )}
                    {/* BUTTON */}
                    <div className={style.bottom}>
                        <div className={style.btnDiv}>
                            <button className={style.btn}><p>Total a pagar $ {priceFormatted}</p></button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
    // handleChange: PropTypes.func.isRequired,
};

export default Cart;