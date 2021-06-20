import React, { Fragment, Suspense, useEffect, useState } from 'react';

import SpinnerLoading from './common/SpinnerLoading';
import { listIconContact, listNavigationOptions } from '../data/header';
const DesktopDevice = React.lazy(() => import('./header/DesktopDevice'));
const MobileDevice = React.lazy(() => import('./header/MobileDevice'));

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/header.css';

const Header = () => {
  
  const [widthWindow, setWithWindow] = useState(window.innerWidth);

  const handleResizeWindow = () => {
    setWithWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <Fragment>
      { widthWindow > 900 ?
        <Suspense fallback={ <SpinnerLoading /> }>
          <DesktopDevice
            listIconContact={ listIconContact }
            listNavigationOptions={ listNavigationOptions }
          />
        </Suspense>
        :
        <Suspense fallback={ <SpinnerLoading /> }>
          <MobileDevice
            listIconContact={ listIconContact }
            listNavigationOptions={ listNavigationOptions }
          />
        </Suspense>
      }
    </Fragment>
  );
};

export default Header;