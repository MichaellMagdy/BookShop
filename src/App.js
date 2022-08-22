import './App.css';
import Bigpic from './components/BigPic';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>

        <Navbar />
      </div>
      <div className='container mx-auto'>

        <Bigpic />
        <Books/>
      </div>
    </div>
  );
}

export default App;
