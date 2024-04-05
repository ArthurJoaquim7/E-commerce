import style from '../Header/Header.module.css';
// import propTypes from 'prop-types'
import { Start } from '../Start/Start';
import waveTop from '../img/waveTop.png'
import truck from '../img/truck.png'
import suport from '../img/suport.png'
import credit from '../img/credit.png'
import done from '../img/done.png'
import { motion } from 'framer-motion'


export const Header = () => {
  return (
    <>
      <div className={style.container}>
        <Start />
        <img src={waveTop} className={style.waveTop} />
        <div className={style.pageInfo}>
          <div className={style.infoDiv}>
            <motion.div className={style.cardInfo}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <img src={truck} className={style.cardImg} />
              <div className={style.cardDesc}>
                <h3>Frete gratis</h3>
                <p>Para todo o Brasil</p>
              </div>
            </motion.div>
            <motion.div className={style.cardInfo}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              <img src={suport} className={style.cardImg} />
              <div className={style.cardDesc}>
                <h3>Suporte 24 HORAS</h3>
                <p>Da melhor qualidade</p>
              </div>
            </motion.div>
            <motion.div className={style.cardInfo}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.7, type: 'spring', stiffness: 200 }}
            >
              <img src={done} className={style.cardImg} />
              <div className={style.cardDesc}>
                <h3>Selo de Qualidade</h3>
                <p>ISO 10515</p>
              </div>
            </motion.div>
            <motion.div className={style.cardInfo}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.8, type: 'spring', stiffness: 200 }}
            >
              <img src={credit} className={style.cardImg} />
              <div className={style.cardDesc}>
                <h3>Pagamentos</h3>
                <p>Aceitamos todos os cartões</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>

  );
};
