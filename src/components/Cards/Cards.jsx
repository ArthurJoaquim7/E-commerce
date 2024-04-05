/* eslint-disable react/prop-types */
import style from '../Cards/Cards.module.css';
import { Link } from 'react-router-dom';
import buy from '../img/buy.png';
import see from '../img/see.png';
import { AnimatePresence, motion } from 'framer-motion'
export const Cards = ({ item, handleClick, handleVideo, }) => {
    const { id, title, category, price, image } = item;

    // Convertendo para número e limitando para 2 casas decimais
    const priceAsNumber = parseFloat(price);
    const before = (priceAsNumber + 10).toFixed(2);
    const priceFormatted = priceAsNumber.toFixed(2);
    const maxLength = 20;


    return (
        <>
            <AnimatePresence>
                <motion.div className={style.container}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ y: 50 }}
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 0.3, ease: 'easeIn', delay: 0.30 }}
                >
                    <div className={style.productCard} key={id}>
                        <div className={style.product1}>
                            <div className={style.imgDiv}>
                                <Link to='/view' onClick={() => handleVideo(item)}>
                                    <img src={image} className={style.productImg} alt={title} />
                                </Link>
                            </div>
                            <motion.div className={style.desc} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                                <p className={style.cat}>{category}</p>
                                <h3 className={style.title}>{title.length > maxLength ? `${title.substring(0, maxLength)}...` : title}</h3>
                                <p className={style.lineMiddle}>De ${before}</p>
                                <h3>
                                    Por $ <span className={style.color}>{priceFormatted}</span>
                                </h3>
                                <div className={style.buyLink} onClick={() => handleClick(item)}>
                                    <img src={buy} className={style.buy} alt="Buy" />
                                </div>
                                <Link to='/view' onClick={() => handleVideo(item)} className={style.seeLink}>
                                    <img src={see} className={style.see} alt={title} />
                                </Link>
                                <button className={style.btn} onClick={() => handleClick(item)}><span>Acicionar ao Carrinho</span></button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>

    );
};


export default Cards;
