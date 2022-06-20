import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';

const header = () => {
  return (
    <header className='header-container'>
        <h1 id='logo'>Keepr</h1>
        <div>
            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            whileHover={{scale: 1.1}}><Link to='./Todo'>To Do</Link></motion.div>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            whileHover={{scale: 1.1}}><Link to='./TOTD'>TOTD</Link></motion.div>
        </div>
    </header>
  )
}

export default header