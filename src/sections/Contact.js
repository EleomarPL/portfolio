import React from 'react';
import PropTypes from 'prop-types';

import '../styles/contact.css';
import SubtopicSection from '../components/common/SubtopicSection';
import {listIconContact} from '../data/header';

const Question = ({ children }) => {
  return (
    <p className="fw-bold" style={ {fontSize: '1.2rem'} }>
      { children }
    </p>
  );
};
const CustomText = ({ children }) => {
  return (
    <strong className="fw-bold text-decoration-underline">
      <i>{ ' ' + children }</i>
    </strong>
  );
};

Question.propTypes = {
  children: PropTypes.node.isRequired
};
CustomText.propTypes = {
  children: PropTypes.node.isRequired
};

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SubtopicSection>Contacto</SubtopicSection>
      <p className="mt-3 pb-4">
        ¡Hola!!, ¿Te gustaría contactarme?, o ¿Quieres que colabore en
        tus proyectos?, puedes hacerlo a través de los siguientes medios,
        que yo estaré encantado de charlar contigo.
      </p>
      <div className="d-flex flex-wrap justify-content-center">
        {
          listIconContact.map((object, index) =>
            <a
              className="card-icon space-cards mb-2"
              style={ {fontSize: '1.7rem', marginLeft: '2.5rem'} }
              href={ object.href }
              rel="noreferrer noopener"
              target="_blank"
              key={ index }
            >
              <i className={ object.className }></i>
              <span className="visually-hidden-focusable">{ object.className.split(' ')[1].slice(3) }</span>
            </a>
          )
        }
      </div>
      <div
        className="row row-cols-md-2 g-4 pt-4"
      >
        <span>
          <Question>¿Puedes llamarme?</Question>
          <p>Por supuesto, este es mi numero:
            <CustomText>+52 958 187 2761</CustomText>
          </p>
        </span>
        <span>
          <Question>¿Quieres mi correo electrónico?</Question>
          <p>Con mucho gusto también te lo proporciono: eleomarpedrolorenzo@hotmail.com</p>
        </span>
        <span>
          <Question>¿De dónde soy?</Question>
          <p>Bueno, soy de Cañada Brava, perteneciente a Santo Domingo de Morelos,
            del distrito Pochutla, estado Oaxaca, y sí, soy orgullosamente mexicano
          </p>
        </span>
        <span>
          <Question>¿Cambiaría de residencia?</Question>
          <p>Por supuesto, estoy egresando de mi universidad, y
            como todos, estoy en busca de oportunidades
          </p>
        </span>
      </div>
    </section>
  );
};

export default Contact;