import { useEffect, useState } from 'react';
import fetchData from '../../api/fetchData';
import { Header } from '../Header/Header';
import { motion, AnimatePresence } from 'framer-motion'
import Cards from '../Cards/Cards';
import style from '../Content/Content.module.css'
import manS from '../img/manS.jpeg'
import joiaS from '../img/joiaS.jpg'
import woman2 from '../img/woman2.jpg'
import hardS from '../img/hardS.jpg'


// eslint-disable-next-line react/prop-types
export const Content = ({ handleClick, handleVideo, }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products')
      .then((res) => {
        setContent(res);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  console.log(content);

  const [startIndex, setStartIndex] = useState(0);

  const handleButtonClick = (uni) => {
    setStartIndex(uni);
  };


  return (
    <>
      <AnimatePresence>
        <div className={style.container}>
          <Header />
          <motion.div className={style.catDiv}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 200 }}
          >
            <h2 className={style.filter}>Filtre por</h2>
            <h1 className={style.categoria}>Categorias</h1>
          </motion.div>
          <div className={style.cat}>
            <motion.div className={style.man} onClick={() => handleButtonClick(0)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <img src={manS} className={style.catImg} />
              <button className={style.bttn} >Homem</button>
            </motion.div>
            <motion.div className={style.joias} onClick={() => handleButtonClick(4)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              <img src={joiaS} className={style.catImg} />
              <button className={style.bttn} >Joias</button>
            </motion.div>
            <motion.div className={style.woman} onClick={() => handleButtonClick(15)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <img src={woman2} className={style.catImg} />
              <button className={style.bttn} >Mulher</button>
            </motion.div>
            <motion.div className={style.hard} onClick={() => handleButtonClick(10)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              <img src={hardS} className={style.catImg} />
              <button className={style.bttn} >Hardware</button>
            </motion.div>
          </div>
          <motion.section className={style.flex}>
            {content.slice(startIndex, startIndex + 4).map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} handleVideo={handleVideo} />
            ))}
          </motion.section>
          {/* <Footer /> */}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Content;
