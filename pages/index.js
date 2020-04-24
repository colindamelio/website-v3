import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Components/Layout';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../motions';

const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  min-height: 100vh;
  max-width: 1400px;
  margin: auto;
`;

const Highlighter = styled.span`
  background-color: #f8f8f8;
  background-image: linear-gradient(to right, #f5e9eb 0%, #fffef6 100%);
`;

const ExternalLink = styled.a`
  display: inline-block;
  color: #00;
  position: relative;
  text-decoration: underline;

  &:visited {
    color: #000;
  }

  &:hover:before {
    height: 100%;
    top: 0;
  }

  &:before {
    position: absolute;
    content: '';
    top: 10px;
    left: 0;
    width: 100%;
    height: 50%;
    opacity: 0.4;
    background-image: linear-gradient(to right, #f3e9eb 0%, #fffef6 100%);
  }
`;

const index = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Colin D'Amelio - Web Developer & Instructor</title>
      </Head>
      <Layout>
        <GridContainer>
          <motion.div variants={fadeIn} className="gridItem1">
            <h1>Colin D'Amelio.</h1>
            <h2>
              I am a
              <Highlighter>
                front-end developer, instructor, and team lead
              </Highlighter>
              based in Toronto.
            </h2>
          </motion.div>

          <div className="gridItem2">
            <motion.p variants={fadeIn}>
              Working as a full-time FED, I have contributed to a variety of
              enterprise{' '}
              <Link href="work">
                <a>projects</a>
              </Link>{' '}
              throughout my career.
            </motion.p>
          </div>

          <div className="gridItem3">
            <motion.p variants={fadeIn}>
              You can read some of the tech education publications I have
              written for Juno College both{' '}
              <ExternalLink href="https://junocollege.com/blog/react-destructuring-techniques">
                here
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href="https://junocollege.com/blog/exploring-state-management-in-react">
                here
              </ExternalLink>
              .
            </motion.p>
          </div>

          <div className="gridItem4">
            <motion.p variants={fadeIn}>
              I encourage you to connect with me across{' '}
              <ExternalLink href="https://github.com/colindamelio">
                GitHub
              </ExternalLink>
              ,{' '}
              <ExternalLink href="https://twitter.com/clndml">
                Twitter
              </ExternalLink>
              , or{' '}
              <ExternalLink href="https://www.linkedin.com/in/colindamelio/">
                LinkedIn
              </ExternalLink>
              .
            </motion.p>
          </div>

          <div className="gridItem5">
            <motion.p variants={fadeIn}>© 2020</motion.p>
          </div>
        </GridContainer>
      </Layout>
    </motion.div>
  );
};

export default index;
