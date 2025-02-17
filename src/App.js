// import './App.css';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Sidebar from './assets/components/Sidebar';
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import './assets/css/main.css';
import Introduction from './assets/pages/Introduction';
import Configuration from './assets/pages/Configuration';
import Installation from './assets/pages/Installation';

const App = () => {

  //this is HTML code
  return (
    <BrowserRouter>
      <Header />
      <div className="v-row container">
        <Sidebar />
        <div className="v-col content">
          <Routes>
            <Route path="/admin/introduction" element={<Introduction />} />
            <Route path="/admin/configuration" element={<Configuration title="Configuration Page"/>} />
            <Route path="/admin/installation" element={<Installation />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
