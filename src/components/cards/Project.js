import PropTypes from 'prop-types';
import styled from 'styled-components';

const Project = ({title, listOfTechnologies, nameImage, information, preview, repository}) => {
  let styleByTechnology = {
    html: 'btn-warning',
    css: 'btn-info',
    react: 'btn-primary',
    js: 'btn-warning',
    nodejs: 'btn-success',
    express: 'btn-light',
    bootstrap: 'btn-secondary',
    electron: 'btn-primary',
    laravel: 'btn-danger',
    php: 'btn-secondary'
  };
  return (
    <ContainerProject>
      <div>
        <picture>
          <source
            srcSet={ require(`../../img/projects/${nameImage === undefined ? 'inProgress' : nameImage}.webp`) }
          />
          <Image
            src={ require(`../../img/projects/${nameImage === undefined ? 'inProgress' : nameImage}.png`) }
            alt={ nameImage === undefined ? 'En proceso' : nameImage }
          />
        </picture>
      </div>
      <ContainerInformation className="p-4">
        <p style={ {'fontSize': '1.3rem', 'fontWeight': 'bold'} }>
          <strong>{ title }</strong>
        </p>
        <div
          className="d-flex flex-wrap justify-content-start pb-4"
          style={ {'fontSize': '0.8rem' } }
        >
          {
            listOfTechnologies.map( technology =>
              <div
                key={ technology }
                className={ styleByTechnology[technology] + ' p-1 mb-2 px-2' }
                style={ {'borderRadius': '5px', marginRight: '1rem'} }
              >
                <strong>{ technology }</strong>
              </div>
            )
          }
        </div>
        <p className="pb-4">
          { information }
        </p>
        <div className="d-flex flex-wrap justify-content-around align-items-center" style={ {'fontSize': '0.6rem'} }>
          { preview !== undefined &&
            <LinkA
              target="_blank"
              rel="noreferrer"
              href={ preview }
              className="btn btn-warning"
            >
              <i className="bi bi-symmetry-horizontal"></i>
              preview
            </LinkA>
          }
          { repository !== undefined && repository !== null &&
            typeof repository !== 'string'
            ? <LinkB className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle w-100"
                type="button" id={ title ? title.split(' ').join('') : 'dropdownMenuButton1' }
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-github"> </i>
                Repositorio
              </button>
              <ul className="dropdown-menu dropdown-menu-dark"
                aria-labelledby={ title ? title.split(' ').join('') : 'dropdownMenuButton1' }
              >
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="dropdown-item"
                    href={ repository[0] }
                  >
                    Frontend
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="dropdown-item"
                    href={ repository[1] }
                  >
                    Backend
                  </a>
                </li>
              </ul>
            </LinkB>
            : repository !== undefined &&
              <LinkA
                target="_blank"
                rel="noreferrer"
                href={ repository }
                className="btn btn-danger"
              >
                <i className="bi bi-github"> </i>
                Repositorio
              </LinkA>
          }
        </div>
      </ContainerInformation>
    </ContainerProject>
  );
};

const Image = styled.img`
  position: absolute;
  opacity: 0.2;
  z-index: -1;
  object-fit: cover;

  border-radius: 10px;

  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;
const ContainerProject = styled.article`
  position: relative;
  
  overflow: hidden;
  border-radius: 10px;
  background-color: #0000000e;
  &:hover {
    ${ Image } {
      transform: rotate(15deg);
    }
  }
`;
const ContainerInformation = styled.div`
  z-index: 1;
`;
const LinkA = styled.a`
  width: 48%;
  margin-bottom: 1rem;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;
const LinkB = styled.div`
  width: 48%;
  margin-bottom: 1rem;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  listOfTechnologies: PropTypes.array.isRequired,
  information: PropTypes.string.isRequired,
  nameImage: PropTypes.string,
  preview: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string
  ]),
  repository: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([null]),
    PropTypes.string
  ])
};

export default Project;