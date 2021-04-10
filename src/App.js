import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function App(){
  return(
    <div>
      <Routes/>
      <ToastContainer autoClass={3000}/>
    </div>

    );
}