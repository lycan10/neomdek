
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import Documentation from './pages/Documentation';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} exact/>
        <Route path='schedule' element={<SchedulePage />} />
        <Route path='documentation' element={<Documentation /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
