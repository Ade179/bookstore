import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Booklist from './components/booklist';
import Categories from './components/categories';
function App() {
  return (
<>
<Navigation />
<Routes>
          <Route exact path="/" element={<Booklist/>}  />
          <Route exact path= "/categories" element ={<Categories />} />
        </Routes>
</>
  );
}

export default App;
