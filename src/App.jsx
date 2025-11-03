import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from '../components/index.jsx';

export default function App() {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
