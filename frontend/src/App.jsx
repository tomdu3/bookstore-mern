import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <div className="text-center p-4">
        Home
        <Outlet />
      </div>
    </>
  )
}

export default App;
