import "./assets/Styles/App.css";
import "./assets/Styles/HomePage.css";
import "./assets/Styles/NavBar.css";
import "./assets/Styles/Package.css";
import "./assets/Styles/UpdatedPackage.css";
import "./assets/Styles/Aboutus.css";
import "./assets/Styles/UserDashboard.css";
import "./assets/Styles/tour-packages5.css";
import "./assets/Styles/global.css"
import AppRouter from "./NavRouter";
import Scrolltotop from './components/Scrolltotop'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
    <AppRouter/>
    <Scrolltotop/>
    <ToastContainer />
    </>
  )
}

