import { Suspense, lazy } from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import Header from './components/Header';
import GroupSection from './components/GroupSections';
import SpinnerLoading from './components/common/SpinnerLoading';

const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <GroupSection />
      <Suspense fallback={ <SpinnerLoading /> }>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
