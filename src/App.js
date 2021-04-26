import React, { Fragment } from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import Header from './components/Header';
import GroupSection from './components/GroupSections';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <Header />
        <GroupSection />
      </div>
    </div>
  );
};

export default App;
