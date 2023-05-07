import './sass/main.scss';
import Header from './components/layout/header/Header';
import About from './components/layout/about/About';


function App() {               
  return (
    <div> 
      <Header headerClassNames={['header']} />
      <About aboutClassNames={['section-about']}/>
    </div>
  );
}

export default App;

