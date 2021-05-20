import React from 'react';

import '../styles/presentation.css';
import imageTest from '../img/test-image.jpg';

const Presentation = () => {
  return (
    <section className="px-4 presentation">
      <div className="my-presentation">
        <h3>Eleomar Pedro Lorenzo</h3>
        <h4>Desarrollador web</h4>
      </div>
      <div className="row row-cols-md-2 align-items-center justify-content-end">
        <div className="my-photo m-auto">
          <img src={ imageTest } alt="Imagen de presentación" />
        </div>
        <div className="text-justify">
          <p>
            ¡Hola !!, soy un estudiante de Ingeniería en Sistemas Computacionales
            y me especializo en el desarrollo frontend y backend de páginas web,
            con más tendencia en el front-end.
          </p>
          <p>
            Me gusta estar aprendiendo cosas nuevas, es por eso que me considero autodidacta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;