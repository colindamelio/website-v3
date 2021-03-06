import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Components/Layout';
import DarkModeToggle from '../Components/DarkModeToggle';

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin: 25px;
    min-height: auto;
  }
`;

const Highlighter = styled.span`
  background-color: #f8f8f8;
  background-image: linear-gradient(to right, #f5e9eb 0%, #fffef6 100%);
`;

const ExternalLink = styled.a`
  position: relative;
  display: inline-block;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  background: rgba(245, 233, 235, 0.7);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 1px;
    background: #333;
    transition: width 550ms ease;
  }

  &:hover:before {
    width: 100%;
  }
`;

const index = ({ title, siteDesc }) => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-53454122-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-53454122-1');
            `,
          }}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Colin D'Amelio, Front End Development, Colin, D'Amelio, Toronto Developer, Juno College, Lead Instructor" />
        <meta name="description" content="Colin D'Amelio | Front-end developer and Lead Instructor." />
        <meta name="author" content="Colin D'Amelio" /> 
        <meta property="og:title" content="Colin D'Amelio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colindamelio.com" />
        <meta property="og:site_name" content="Colin D'Amelio" />
        <meta property="og:description" content="Colin D'Amelio | Front-end developer and Lead Instructor." />
        <title>{siteDesc}</title>
      </Head>
      <DarkModeToggle />
      <Layout>
        <GridContainer>
          <motion.div variants={fadeIn} className="gridItem1">
            <h1>{title}</h1>
            <h2>
              I am a{' '}
              <Highlighter>
                front-end developer, instructor, team lead, and curriculum
                writer
              </Highlighter>{' '}
              based in Toronto.
            </h2>
          </motion.div>

          <div className="gridItem2">
            <motion.p variants={fadeIn}>
              Working as a full-time FED, I have contributed to a variety of
              enterprise{' '}
              <Link href="work">
                <ExternalLink>projects</ExternalLink>
              </Link>{' '}
              throughout my career.
            </motion.p>
          </div>

          <div className="gridItem3">
            <motion.p variants={fadeIn}>
              You can read some of the tech education publications I have
              written for Juno College both{' '}
              <ExternalLink
                href="https://junocollege.com/blog/react-destructuring-techniques"
                rel="noopener noreferrer"
                target="_blank">
                here
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink
                href="https://junocollege.com/blog/exploring-state-management-in-react"
                rel="noopener noreferrer"
                target="_blank">
                here
              </ExternalLink>
              .
            </motion.p>
          </div>

          <div className="gridItem4">
            <motion.p variants={fadeIn}>
              I encourage you to connect with me across{' '}
              <ExternalLink
                href="https://github.com/colindamelio"
                rel="noopener noreferrer"
                target="_blank">
                GitHub
              </ExternalLink>
              ,{' '}
              <ExternalLink
                href="https://twitter.com/clndml"
                rel="noopener noreferrer"
                target="_blank">
                Twitter
              </ExternalLink>
              , or{' '}
              <ExternalLink
                href="https://www.linkedin.com/in/colindamelio/"
                rel="noopener noreferrer"
                target="_blank">
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

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: configData.title,
      siteDesc: configData.description,
    },
  };
}
