
import './App.css';
import Cover from './Components/Cover-component/cover';
import Cards from './Components/Card-holder/card-container';
import Footer from './Components/footer-component/footer';
import './css/common.css';

function App() {
  return (
    <div className="App">
      
      <Cover/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
