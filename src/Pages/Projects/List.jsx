import React from 'react';
import { ListData } from './ListData';
import { motion } from 'framer-motion';
import './List.css';

const staggerAnimation = {
  initial: {
    opacity: 0,
    y: 55,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function List() {
  return (
    <div className="list-container">
      {ListData.map((item, index) => {
        return (
          <motion.a
            className="list-item"
            href={item.Link}
            key={index}
            variants={staggerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="list-pic">
              {item.Pic}
            </div>
            <h5>{item.Title}</h5>
            <div className="list-body">
              <p className="list-text">{item.Text}</p>
              <p className="tags-container">
                {item.Tags.map((tag, id) => (
                  <span className="list-tags" key={id}>
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}

