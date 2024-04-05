import { motion } from 'framer-motion'

import './Start.css'
export const Start = () => {


    return (
        <div className='startContainer'>
            <div className="startTop">
                <div className="topHeader">
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 100 }}
                    >Bem vind <span className='color'>@</span></motion.h2>
                </div>
            </div>
            <div className="startMid">
                <div className="midDiv">
                    <motion.h1
                        initial={{ opacity: 0, x: 1000, y: 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 70, padding: 0, margin: 0 }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
                        className='midFake'>Fake</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: 1000, y: 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 10 }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.5, delay: 0.9, type: 'spring', stiffness: 100 }}
                        className='midEco'><span className='color2'>E-</span>commerce</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: 1000, y: 0 }}
                        whileInView={{ opacity: 1, x: 0, y: -40, padding: 0, margin: 0 }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
                        className='midFake'>Store</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.3, delay: 1, type: 'spring', stiffness: 100 }}
                        className="midDesc">Usanso REACT e FRAMER MOTION, criei esse lindo E-commerce. É muito bom poder se desafiar com projetos e aprender codando. Todo dia tem um bug novo para resolver, as vezes o mesmo bug do dia anterior, mas enfim, compre com moderação.</motion.p>
                </div>
            </div>
        </div>
    )
}

