import { motion } from 'framer-motion';

const easing = [0.48, 0.15, 0.25, 0.96];

const fadeInUp = {
  initial: {
    x: 40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function () {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <section>
        <motion.h1 variants={fadeInUp}>Work</motion.h1>
        <motion.ul variants={stagger}>
          <motion.li variants={fadeInUp}>
            <div>
              <p>
                <a href="https://www.honda.ca/buildyourhonda">
                  Honda/Acura Build and Price
                </a>{' '}
                - Front-end Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <div>
              <p>
                <a href="https://www.honda.ca/dealerlocator">
                  Honda/Acura Dealer Locator
                </a>{' '}
                - Front-end Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <div>
              <p>
                <a href="https://www.acura.ca">Acura Homepage</a> - Front-end
                Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <div>
              <p>
                <a href="https://www.saraswatibali.com">
                  Saraswati Bali Retreats
                </a>{' '}
                - Personal project
              </p>
            </div>
          </motion.li>
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
}
