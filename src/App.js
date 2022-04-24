import './App.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function App() {
  const divStyle = {
    style: 'overflow: hidden !important',
  };

  return (
    <div className="App" style={divStyle}>
      <Header />
      <video autoPlay muted loop id="bg-video">
        <source
          src={require('./components/images/walking.mp4')}
          type="video/mp4"
        />
      </video>
      <div className="main-headline-container">
        <div className="main-headline">
          <h1>get the latest drop of kicks.</h1>
        </div>
        <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
          <button className="home-shop-now-button">Shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
