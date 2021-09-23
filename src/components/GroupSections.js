import {Suspense, lazy} from 'react';

import Presentation from '../sections/Presentation';
import SpinnerLoading from './common/SpinnerLoading';

const Contact = lazy(() => import('../sections/Contact'));
const Projects = lazy(() => import('../sections/Projects'));
const Skills = lazy(() => import('../sections/Skills'));

const GroupSection = () => {
  return (
    <main className="px-sm-4">
      <Presentation />
      <Suspense fallback={ <SpinnerLoading /> }>
        <Skills />
      </Suspense>
      <Suspense fallback={ <SpinnerLoading /> }>
        <Projects />
      </Suspense>
      <Suspense fallback={ <SpinnerLoading /> }>
        <Contact />
      </Suspense>
    </main>
  );
};

export default GroupSection;