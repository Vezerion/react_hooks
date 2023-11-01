import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './components/navigation/navigation';
import { State } from './components/useState/useState';
import './App.css';
import { Effect } from "./components/useEffect/useEffect";
import { Ref } from "./components/useRef/useRef";
import { Memo } from "./components/useMemo/useMemo";
import { Callback } from "./components/useCallback/useCallback";
import { Context } from "./components/useContext/useContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path='/' element={<State />} />
            <Route path='/useState' element={<State />} />
            <Route path='/useEffect' element={<Effect/>}/>
            <Route path='/useRef' element={<Ref/>}/>
            <Route path='/useMemo' element={<Memo/>}/>
            <Route path='/useCallback' element={<Callback/>}/>
            <Route path='/useContext' element={<Context/>}/>
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
