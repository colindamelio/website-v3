const Layout = (props) => {
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
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.65),
              rgba(255, 255, 255, 0.85)
            ),
            url(./noise-texture.gif);
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
          font-family: 'Roboto', Arial, Helvetica, sans-serif;
          font-size: 16px;
          text-rendering: optimizeLegibility !important;
          -webkit-font-smoothing: antialiased !important;
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .gridItem1 {
          grid-area: 1 / 2 / 2 / 7;
          align-self: end;
        }

        .gridItem2 {
          grid-area: 2 / 2 / 3 / 5;
          align-self: center;
        }

        .gridItem3 {
          grid-area: 2 / 5 / 3 / 8;
          align-self: center;
        }

        .gridItem4 {
          grid-area: 2 / 8 / 3 / 11;
          align-self: center;
        }

        .gridItem5 {
          grid-area: 3 / 6 / auto / auto;
          align-self: end;
          white-space: nowrap;
        }

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
          font-weight: normal;
        }

        @media screen and (max-width: 768px) {
          .gridContainer {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            margin: 25px;
            min-height: auto;
          }

          .gridItem1,
          .gridItem2,
          .gridItem3,
          .gridItem4,
          .gridItem5 {
            grid-column: auto;
            grid-row: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
