import './App.css';
import { Header } from './components/Header/Header';
import { TextMarquee } from './components/TextMarquee/TextMarquee';
import { ProductInformation } from './containers/ProductInformation/ProductInformation';
import { WhyBloating } from './containers/WhyBloating/WhyBloating';

function App() {
  return (
    <div className="app w-full">
      <Header />
      <ProductInformation />
      <TextMarquee />
      <WhyBloating />
    </div>
  );
}

export default App;
