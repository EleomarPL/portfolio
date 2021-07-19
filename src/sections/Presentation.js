import React from 'react';

import '../styles/presentation.css';
import imageMe from '../img/myImage.webp';

const Presentation = () => {
  return (
    <section className="presentation" id="presentation">
      <div className="my-presentation">
        <h1 style={ {fontSize: '1.75rem'} }>Eleomar Pedro Lorenzo</h1>
        <h2 style={ {fontSize: '1.5rem'} }>Desarrollador web</h2>
      </div>
      <div className="row row-cols-md-2 align-items-center justify-content-end">
        <div className="container-photo">
          <div className="my-photo">
            <img src={ imageMe } alt="Imagen de presentación"
              className="img" />
          </div>
        </div>
        <div className="text-justify info-me">
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