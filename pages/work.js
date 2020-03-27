import Layout from '../Components/Layout';

export default function() {
  return (
    <Layout>
      <section>
        <h1>Work</h1>
        <ul>
          <li>
            <div>
              <p><a href="https://www.honda.ca/buildyourhonda">Honda/Acura Build and Price</a> - Front-end Developer @ Climax Media</p>
            </div>
          </li>
          <li>
            <div>
              <p><a href="https://www.honda.ca/dealerlocator">Honda/Acura Dealer Locator</a> - Front-end Developer @ Climax Media</p>
            </div>
          </li>
          <li>
            <div>
              <p><a href="https://www.acura.ca">Acura Homepage</a> - Front-end Developer @ Climax Media</p>
            </div>
          </li>
          <li>
            <div>
              <p><a href="https://www.saraswatibali.com">Saraswati Bali Retreats</a> - Personal project</p>
            </div>
          </li>
        </ul>
        <style jsx>{`
        
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
          }

          a {
            background-color: rgba(255, 235, 59, 0.7);
            color: #000;
            padding: 3px;
          }

        `}</style>
      </section>
    </Layout>
  )
}