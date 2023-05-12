import './sass/main.scss';
import Header from './components/layout/header/Header';
import About from './components/layout/about/About';
import Features from './components/layout/features/Features';
import Tours from './components/layout/tours/Tours';
import Stories from './components/layout/stories/Stories';

function App() {               
  return (
    <div> 
      <Header headerClasses={'header'} />
      <About aboutClasses={'section-about'}/>
      <Features featureClasses={'section-features'}/>
      <Tours tourClasses={'section-tours'}/>
      <Stories storiesClasses={'section-stories'}/>

    </div>
  );
}

export default App;

