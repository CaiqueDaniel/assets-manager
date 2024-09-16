import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from './Router';

function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
