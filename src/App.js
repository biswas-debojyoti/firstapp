import './App.css';
import ArrayOperation from './components/ArrayOperation';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ArrayOperation/>
      <Footer />
    </div>
  );
}

export default App;
