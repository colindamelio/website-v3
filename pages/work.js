import Link from 'next/link';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../motions';

const HomeButton = styled.a`
  width: 10px;
  height: 25px;
  border-radius: 3px;
  background: #fff;
  color: red;
  box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const work = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      {/* <Link href="/" passHref>
        <HomeButton>
        </HomeButton>
      </Link> */}
      <section>
        <motion.h1 variants={fadeIn}>Work</motion.h1>
        <motion.ul variants={stagger}>
          <motion.li variants={fadeIn}>
            <div>
              <p>
                <a href="https://www.honda.ca/buildyourhonda">
                  Honda/Acura Build and Price
                </a>{' '}
                - Front-end Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeIn}>
            <div>
              <p>
                <a href="https://www.honda.ca/dealerlocator">
                  Honda/Acura Dealer Locator
                </a>{' '}
                - Front-end Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeIn}>
            <div>
              <p>
                <a href="https://www.acura.ca">Acura Homepage</a> - Front-end
                Developer @ Climax Media
              </p>
            </div>
          </motion.li>
          <motion.li variants={fadeIn}>
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
};

export default work;
