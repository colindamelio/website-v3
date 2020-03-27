import Layout from '../Components/Layout';
import Link from 'next/link';

export default function() {
  return (
    <Layout>
    <main className="gridContainer">

      <div className="gridItem1">
        <h1>Colin D'Amelio.</h1>
        <h2>I am a <span>front-end developer, instructor, and team lead</span> based in Toronto.</h2>    
      </div>

      <div className="gridItem2">
        <p>Working as a full-time FED, I have contributed to a variety of enterprise <Link href="work"><a>projects</a></Link> throughout my career.</p>
      </div>

      <div className="gridItem3">
        <p>You can read some of the tech education publications I have written for Juno College both <a href="https://junocollege.com/blog/react-destructuring-techniques">here</a> and <a href="https://junocollege.com/blog/exploring-state-management-in-react">here</a>.</p>
      </div>

      <div className="gridItem4">
        <p>I encourage you to connect with me across <a href="https://github.com/colindamelio">GitHub</a>, <a href="https://twitter.com/clndml">Twitter</a>, or <a href="https://www.linkedin.com/in/colindamelio/">LinkedIn</a>.</p>
      </div>

      <style jsx>{`
        .gridContainer {
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          grid-template-rows: repeat(2, 50vh);
          grid-column-gap: 20px;
          grid-row-gap: 0px;
        }
          
        .gridItem1 { 
          grid-area: 1 / 2 / 2 / 7;
          align-self: center;  
        }
        .gridItem2 { grid-area: 2 / 2 / 3 / 5; }
        .gridItem3 { grid-area: 2 / 5 / 3 / 8; }
        .gridItem4 { grid-area: 2 / 8 / 3 / 11; }

        .gridItem2,
        .gridItem3,
        .gridItem4 {
          margin-top: 50px;
        }

        h1 {
          font-weight: bold;
          font-size: 40px;
          margin: 0 0 10px;
        }

        h2 {
          font-size: 20px;
        }

        span {
          background-color: #f8f8f8;
          background-image: linear-gradient(to right, #ffeb3b 0%, #fffef5 100%);
        }
        
        p {
          margin: 0;
        }
        
        a {
          color: #000;
          text-decoration: underline;
          text-decoration-color: #000;
        }

        @media screen and (max-width: 768px) {
          .gridContainer {
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
              margin: 25px;
          }
        
          .gridItem1, .gridItem2, .gridItem3, .gridItem4 {
            grid-column: auto;
            grid-row: auto;
          }
        }

      `}</style>
    </main>
    </Layout>
  );
}