import React from 'react';

import SubtopicSection from '../components/common/SubtopicSection';
import {skills} from '../data/skills';

import '../styles/skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <SubtopicSection>Mis habilidades</SubtopicSection>
      <p className="mt-3 pb-4">
        No tengo suficiente experiencia laboral, pero estoy en constante
        aprendizaje y participando en proyectos locales, y a continuación
        muestro mis principales habilidades de manera general.
      </p>
      <div className="row row-cols-md-2 g-4">
        {
          skills.map( object =>
            <div
              className="d-flex flex-column"
              key={ object.title }
            >
              <div className="d-flex align-items-center">
                {
                  object.images.map( img =>
                    <div
                      className="img-skills"
                      key={ img }
                    >
                      <picture>
                        <source
                          srcSet={ require(`../img/skills/${img}.webp`).default }
                        />
                        <img
                          src={
                            require(
                              `../img/skills/${img}.png`
                            ).default
                          }
                          alt={ img }
                        />
                      </picture>
                    </div>
                  )
                }
              </div>
              <span className="fw-bold mt-2">{ object.title }</span>
              <span>{ object.description }</span>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Skills;