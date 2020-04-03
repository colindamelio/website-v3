const Layout = props => {
  return (
    <>
      {props.children}

      <style jsx global>{`

        @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap');

        * { 
          -moz-box-sizing: border-box; 
          -webkit-box-sizing: border-box; 
          box-sizing: border-box; 
        }

        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3;
          color: #333;
          font-family: 'Montserrat', sans-serif;
        }

        h1 {
          font-weight: bold;
          font-size: 40px;
          margin: 0 0 10px;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        p {
          font-family: "Roboto", Arial, Helvetica, sans-serif;
          font-size: 16px;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
          margin-bottom: 10px;
        }

        a {
          text-decoration: none;
        }

      `}</style>
    </>
  )
}

export default Layout