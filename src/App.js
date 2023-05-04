import './sass/main.scss';
import Header from './components/Header';

function App() {
  console.log('App');                 
  return (
    <Header headerClassNames={['header']} />
  );
}

export default App;

