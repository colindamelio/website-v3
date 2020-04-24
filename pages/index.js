import Head from 'next/head';
import Layout from '../Components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const easing = [0.48, 0.15, 0.25, 0.96];

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export default function () {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Colin D'Amelio - Web Developer & Instructor</title>
      </Head>
      <Layout>
        <main className="gridContainer">
          <motion.div variants={fadeInUp} className="gridItem1">
            <h1>Colin D'Amelio.</h1>
            <h2>
              I am a <span>front-end developer, instructor, and team lead</span>{' '}
              based in Toronto.
            </h2>
          </motion.div>

          <div className="gridItem2">
            <motion.p variants={fadeInUp}>
              Working as a full-time FED, I have contributed to a variety of
              enterprise{' '}
              <Link href="work">
                <a>projects</a>
              </Link>{' '}
              throughout my career.
            </motion.p>
          </div>

          <div className="gridItem3">
            <motion.p variants={fadeInUp}>
              You can read some of the tech education publications I have
              written for Juno College both{' '}
              <a href="https://junocollege.com/blog/react-destructuring-techniques">
                here
              </a>{' '}
              and{' '}
              <a href="https://junocollege.com/blog/exploring-state-management-in-react">
                here
              </a>
              .
            </motion.p>
          </div>

          <div className="gridItem4">
            <motion.p variants={fadeInUp}>
              I encourage you to connect with me across{' '}
              <a href="https://github.com/colindamelio">GitHub</a>,{' '}
              <a href="https://twitter.com/clndml">Twitter</a>, or{' '}
              <a href="https://www.linkedin.com/in/colindamelio/">LinkedIn</a>.
            </motion.p>
          </div>

          <div className="gridItem5">
            <motion.p variants={fadeInUp}>© 2020</motion.p>
          </div>
        </main>
      </Layout>
    </motion.div>
  );
}
