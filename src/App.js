import React, { Fragment } from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import Header from './components/Header';
import GroupSection from './components/GroupSections';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <GroupSection />
      <Footer />
    </div>
  );
};

export default App;
