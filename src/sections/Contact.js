import styled from 'styled-components';

import SubtopicSection from '../components/common/SubtopicSection';
import {listIconContact} from '../data/header';

const Contact = () => {
  return (
    <ContainerContact id="contact">
      <SubtopicSection>Contacto</SubtopicSection>
      <p className="mt-3 pb-4">
        ¡Hola!!, ¿Te gustaría contactarme?, o ¿Quieres que colabore en
        tus proyectos?, puedes hacerlo a través de los siguientes medios,
        que yo estaré encantado de charlar contigo.
      </p>
      <div className="d-flex flex-wrap justify-content-center">
        { listIconContact &&
          listIconContact.map((object, index) =>
            <a
              className="card-icon space-cards mb-2"
              style={ {fontSize: '1.7rem', marginLeft: '1.5rem'} }
              href={ object.href }
              rel="noreferrer noopener"
              target="_blank"
              key={ index }
            >
              <i className={ object.className }></i>
              <span className="visually-hidden-focusable">
                { object.className.split(' ')[1].slice(3) }
              </span>
            </a>
          )
        }
      </div>
      <div className="row row-cols-md-2 g-4 pt-4">
        <div>
          <Question>¿Puedes llamarme?</Question>
          <p>
            Por supuesto, este es mi numero:
            <CustomText href="tel:+529581872761"
              target="_blank"
              title="Llamar a Eleomar Pedro Lorenzo"
              rel="noreferrer noopener"
            >
              +52 958 187 2761
            </CustomText>
          </p>
        </div>
        <div>
          <Question>¿Quieres mi correo electrónico?</Question>
          <p>
            Con mucho gusto también te lo proporciono:
            <CustomText href="mailto:eleomarpedrolorenzo@gmail.com"
              target="_blank"
              title="Enviar correo electrónico"
              rel="noreferrer noopener"
            >
              eleomarpedrolorenzo @gmail.com
            </CustomText>
          </p>
        </div>
        <div>
          <Question>¿De dónde soy?</Question>
          <p>
            Bueno, soy de Cañada Brava, perteneciente a Santo Domingo de Morelos,
            del distrito Pochutla, estado Oaxaca, y sí, soy orgullosamente mexicano
          </p>
        </div>
        <div>
          <Question>¿Cambiaría de residencia?</Question>
          <p>
            Por supuesto, estoy egresando de mi universidad, y
            como todos, estoy en busca de oportunidades
          </p>
        </div>
      </div>
    </ContainerContact>
  );
};

const ContainerContact = styled.section`
  margin-top: 3rem;
`;
const Question = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
const CustomText = styled.a`
  color: var(--color-primary);
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  &:hover {
    color: var(--color-primary);
  }
`;

export default Contact;