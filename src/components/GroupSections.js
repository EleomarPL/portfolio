import React from 'react';
import Contact from '../sections/Contact';
import Presentation from '../sections/Presentation';
import Skills from '../sections/Skills';

const GroupSection = () => {
  return (
    <main>
      <Presentation />
      <Skills />
      <Contact />
    </main>
  );
};

export default GroupSection;