import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './components/navigation/navigation';
import { State } from './components/useState/useState';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path='/' element={<State />} />
            <Route path='/useState' element={<State />} />
            <Route path='/useEffect' />
            <Route path='/useRef' />
            <Route path='/useMemo' />
            <Route path='/useCallback' />
            <Route path='/useContext' />
            <Route path='/useReducer' />
            <Route />
            <Route />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
