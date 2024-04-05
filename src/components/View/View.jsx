import style from '../View/View.module.css';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
import carrinho from '../img/carrinho.png'
import { motion } from 'framer-motion'

export const View = ({ toVideo, handleClick }) => {

  const limit = toVideo.slice(0, 1);
  return (
    <div className={style.container}>
      {
        limit?.map((item) => (
          <div className={style.view} key={item.id}>
            <div className={style.viewL}>
              <div className={style.imgView}>
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.3 }}
                />
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.4 }}
                />
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.5 }}
                />
              </div>
              <motion.img src={item.image} className={style.img}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ scale: 0.5 }}
                viewport={{
                  once: true,
                }}
                transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.3 }}
              />
              <div className={`${style.imgView} ${style.imgViewResp}`}>
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.3 }}
                />
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.4 }}
                />
                <motion.img src={item.image} className={style.imgV}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.5 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.5 }}
                />
              </div>
            </div>
            <div className={style.viewR}>
              <div className={style.name}>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.3 }}
                >{item.title}</motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.4 }}
                >{item.category}</motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.5 }}
                >Vendido e entregue por <span className='color'>Fake Store</span></motion.p>
              </div>
              <div className={style.price}>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.6 }}
                >R$ {item.price}</motion.h1>
                {/* <p>3x 49,99 sem juros</p> */}
              </div>
              <div className={style.btnDiv}>
                <motion.button className={style.btn} onClick={() => handleClick(item)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.7 }}
                ><span className='testeSpan'>Adicionar ao Carrinho <img src={carrinho} className={style.carrinho} /></span></motion.button>
                <motion.div className={style.btnVoltar}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ x: 500 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, ease: 'easeIn', type: 'spring', stiffness: 100, delay: 0.8 }}
                >
                  <Link to='/' className={style.link}>
                    Voltar
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))
      }
    </div >
  );
};

View.propTypes = {
  data: propTypes.object
}.isRequired;
