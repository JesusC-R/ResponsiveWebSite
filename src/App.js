import './sass/main.scss';
import Header from './components/Header';
import About from './components/About';


function App() {               
  return (
    <div> 
      <Header headerClassNames={['header']} />
      <About />
    </div>
  );
}

export default App;

