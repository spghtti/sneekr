import Header from '../Header';

function About() {
  return (
    <div className="About">
      <Header />
      <div className="about-info">
        <div className="about-headline-container">
          <h1 className="about-headline">
            timeless sneakers. available for a limited time.
          </h1>
        </div>
        <div className="about-info-content">
          <div className="about-paragraph-right">
            <div className="about-paragraph-info">
              <h1>drops delivered to your home.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                odio tempor orci dapibus ultrices in iaculis.Nisl purus in
                mollis nunc sed id. Nibh venenatis cras sed felis eget velit.
                Maecenas pharetra convallis posuere morbi leo urna molestie at
                elementum. Adipiscing tristique risus nec feugiat in.{' '}
              </p>
            </div>
            <div className="about-image-right">
              <img
                src={require('./images/about-background.jpg')}
                alt="Collection of sneakers"
              ></img>
            </div>
          </div>
          <div className="about-paragraph-left">
            <div className="about-image-left">
              <img
                src={require('./images/about-background.jpg')}
                alt="Collection of sneakers"
              ></img>
            </div>
            <div className="about-paragraph-info">
              <h1>a new drop every month.</h1>
              <p>
                Gravida arcu ac tortor dignissim convallis. Mi sit amet mauris
                commodo quis imperdiet massa. Cursus turpis massa tincidunt dui
                ut. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.
                Imperdiet sed euismod nisi porta lorem mollis. Blandit volutpat
                maecenas volutpat blandit aliquam etiam erat velit scelerisque.
                Ultrices neque ornare aenean euismod elementum nisi quis. Tellus
                id interdum velit laoreet id donec ultrices tincidunt arcu.{' '}
              </p>
            </div>
          </div>
          <div className="about-paragraph-right">
            <div className="about-paragraph-info">
              <h1>totally carbon-neutral.</h1>
              <p>
                Feugiat sed lectus vestibulum mattis ullamcorper velit. Diam sit
                amet nisl suscipit adipiscing. Quis enim lobortis scelerisque
                fermentum dui faucibus in ornare. Lectus quam id leo in vitae
                turpis massa sed elementum. Enim tortor at auctor urna nunc id
                cursus metus. Enim tortor at auctor urna. Viverra aliquet eget
                sit amet tellus. Donec ultrices tincidunt arcu non sodales
                neque. Commodo ullamcorper a lacus vestibulum sed arcu non.
                Ullamcorper velit sed ullamcorper morbi tincidunt.
              </p>
            </div>
            <div className="about-image-right">
              <img
                src={require('./images/about-background.jpg')}
                alt="Collection of sneakers"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
