
import './App.css';
import Layout from './Layouts/Mainlayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Pages/Mainpage';
import Fact from './Pages/fact';
import Wildcard from './Pages/Wildcard';
import About from './Pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Mainpage/>}/>
          <Route path='/:factId' element={<Fact/>}/>
          <Route path='/About' element={<About/>}></Route>
        </Route>
        <Route path='*' element={<Wildcard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
