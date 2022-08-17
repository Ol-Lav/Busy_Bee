import { Routes, Route } from 'react-router';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Weather } from './components/Weather/Weather';
import { Quote } from './components/Quote/Quote';
import {Calculator} from './components/Calculator/Calculator';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
