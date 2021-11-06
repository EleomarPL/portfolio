import PropTypes from 'prop-types';

const Project = ({title, listOfTechnologies, nameImage, information, preview, repository}) => {
  let styleByTechnology = {
    html: 'btn-warning',
    css: 'btn-info',
    react: 'btn-primary',
    js: 'btn-warning',
    nodejs: 'btn-success',
    express: 'btn-light',
    bootstrap: 'btn-secondary',
    electron: 'btn-primary'
  };
  return (
    <article className="project">
      <div>
        <picture>
          <source
            srcSet={ require(`../../img/projects/${nameImage === undefined ? 'inProgress' : nameImage}.webp`).default }
          />
          <img
            src={ require(`../../img/projects/${nameImage === undefined ? 'inProgress' : nameImage}.png`).default }
            className="img-background"
            alt={ nameImage === undefined ? 'En proceso' : nameImage }
          />
        </picture>
      </div>
      <div className="p-4 information">
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
            <a
              target="_blank"
              rel="noreferrer"
              href={ preview }
              className="btn btn-warning links"
            >
              <i className="bi bi-symmetry-horizontal"></i>
              preview
            </a>
          }
          { repository !== undefined && repository !== null &&
            typeof repository !== 'string'
            ? <div className="links dropdown">
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
            </div>
            : repository !== undefined &&
              <a
                target="_blank"
                rel="noreferrer"
                href={ repository }
                className="btn btn-danger links"
              >
                <i className="bi bi-github"> </i>
                Repositorio
              </a>
          }
        </div>
      </div>
    </article>
  );
};

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