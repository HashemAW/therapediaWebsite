import { Collapse } from 'react-collapse';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export const AccordionItem = ({ open, toggle, title, desc, borderColor }) => {
  return (
    <div className='font-sans'>
      <div className='text-[#6D6D6D] py-[15px] px-[10px] md:px-[50px] flex justify-between items-center cursor-pointer' onClick={toggle}>
        <p className={`text-base font-como-bold ${open ? 'text-pink' : 'text-black'}`}> {title} </p>
        <div className='text-[1.2rem]'>
          {open ? <FaAngleUp className='text-light-grey' /> : <FaAngleDown />}
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          key={open}
          exit={{ opacity: 0, height: 0, duration: 0.4 }}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className='overflow-hidden'
          transition={{ duration: 0.4 }}
        >
          <Collapse isOpened={open}>
            <div className='w-full h-[1px] mb-5 mx-5 bg-grey-light'></div>
            <div className='px-[10px] md:px-[50px] pb-[20px] font-como-normal'> {desc} </div>
          </Collapse>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
