import styled from 'styled-components';

import SubtopicSection from '../components/common/SubtopicSection';
import {skills} from '../data/skills';

const Skills = () => {
  return (
    <ContainerSkill>
      <SubtopicSection>Mis habilidades</SubtopicSection>
      <p className="mt-3 pb-4">
      Mi enfoque se centra en la creación de aplicaciones web
      eficientes y escalables, utilizando tecnologías modernas
      siguiendo las mejores prácticas de la industria, y a
      continuación muestro mis principales habilidades de manera general.
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
                    <ContainerImage
                      key={ img }
                    >
                      <picture>
                        <source
                          srcSet={
                            new URL(`../img/skills/${img}.webp`, import.meta.url).href
                            //require(`../img/skills/${img}.webp`)
                          }
                        />
                        <Image
                          src={
                            //require(
                            //  `../img/skills/${img}.png`
                            //)
                            new URL(`../img/skills/${img}.png`, import.meta.url).href
                          }
                          alt={ img }
                        />
                      </picture>
                    </ContainerImage>
                  )
                }
              </div>
              <span className="fw-bold mt-2">{ object.title }</span>
              <span>{ object.description }</span>
            </div>
          )
        }
      </div>
    </ContainerSkill>
  );
};

const ContainerSkill = styled.section`
  margin-top: 2rem;
  padding-top: 4rem;
  @media only screen and (max-width: 900px) {
    padding-top: 0;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const ContainerImage = styled.div`
  width: 3rem;
  height: 3rem;

  margin-right: 0.5rem;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export default Skills;