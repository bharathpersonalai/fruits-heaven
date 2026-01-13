import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WhyUs from './pages/WhyUs';
import OrderNow from './pages/OrderNow';
import { Page } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div id="app">
        <Navbar cart={[]} />
        <main>
          <Routes>
            <Route path={Page.HOME} element={<Home />} />
            <Route path={Page.MENU} element={<Menu />} />
            <Route path={Page.WHY_US} element={<WhyUs />} />
            <Route path={Page.ORDER} element={<OrderNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;