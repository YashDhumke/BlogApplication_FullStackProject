
import './App.css';

import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Categories from './Components/Categories'
import MostPopular from './Components/MostPopular';
import LatestPosts from './Components/LatestPosts';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Main/>
       <Categories/>
       <MostPopular/>
       <LatestPosts/>
       <Footer/>
    </div>
  );
}

export default App;
