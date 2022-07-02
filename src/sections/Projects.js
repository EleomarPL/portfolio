import styled from 'styled-components';

import SubtopicSection from '../components/common/SubtopicSection';
import Project from '../components/cards/Project';
import {listOfProjects} from '../data/projects';

const Projects = () => {
  return (
    <ContainerPresentation id="projects">
      <SubtopicSection>Proyectos</SubtopicSection>
      <p className="mt-3 pb-4">
        Bienvenido a mi portafolio, aquí te muestro algunos de mis trabajos,
        espero que te llame la atención y los disfrutes. Si gustas puedes ir
        a visitar mis repositorios de GitHub.
      </p>
      <div className="row row-cols-lg-2 g-4">
        { listOfProjects !== null &&
          listOfProjects.map( informationProject =>
            <div className="d-flex flex-wrap justify-content-between" key={ informationProject.title }>
              <Project
                title={ informationProject.title }
                listOfTechnologies={ informationProject.technologies }
                nameImage={ informationProject.nameImg }
                information={ informationProject.information }
                preview={ informationProject.linkToPreview }
                repository={ informationProject.linkToRepository }
              />
            </div>
          )
        }
      </div>
    </ContainerPresentation>
  );
};

const ContainerPresentation = styled.section`
  margin-top: 3rem;
`;

export default Projects;