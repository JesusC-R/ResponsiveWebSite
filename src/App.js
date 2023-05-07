import './sass/main.scss';
import Header from './components/layout/header/Header';
import About from './components/layout/about/About';
import Features from './components/layout/features/Features';


function App() {               
  return (
    <div> 
      <Header headerClasses={'header'} />
      <About aboutClasses={'section-about'}/>
      <Features featureClasses={'section-features'}/>
    </div>
  );
}

export default App;

