import { motion } from 'framer-motion';

import { fadeIn, stagger } from '../motions';
import projects from '../data/projects';

const work = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <section>
        <motion.h1 variants={fadeIn}>Work</motion.h1>
        <motion.ul variants={stagger}>
          {projects.map(work => {
            return (
              <motion.li variants={fadeIn}>
                <div>
                  <p>
                    <a href={work.url}>
                      {work.name}
                    </a>{' '}
                    - {work.tag}
                  </p>  
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
        <style jsx>{`
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
          }

          a {
            background-color: rgba(245, 233, 235, 0.7);
            color: #000;
            padding: 3px;
          }

          @media screen and (max-width: 768px) {
            section {
              margin: 25px;
            }
            a {
              display: block;
            }
          }
        `}</style>
      </section>
    </motion.div>
  );
};

export default work;
