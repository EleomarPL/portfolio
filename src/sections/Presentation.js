import React from 'react';

import '../styles/presentation.css';
import imageTest from '../img/test-image.jpg';

const Presentation = () => {
  return (
    <section className="presentation d-flex justify-content-between align-items-center">
      <div className="my-photo">
        <img src={ imageTest } alt="Imagen de presentación" />
      </div>
      <div className="text-justify px-4">
        <h3>Eleomar Pedro Lorenzo</h3>
        <h4>Desarrollador web</h4>
        <p>
          ¡Hola !!, soy un estudiante de Ingeniería en Sistemas Computacionales
          y me especializo en el desarrollo frontend y backend de páginas web,
          con más tendencia en el front-end.
        </p>
        <p>
          Me gusta estar aprendiendo cosas nuevas, es por eso que me considero autodidacta.
        </p>
      </div>
    </section>
  );
};

export default Presentation;