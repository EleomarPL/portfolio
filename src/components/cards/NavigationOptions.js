import PropTypes from 'prop-types';

const NavigationOptions = ({ href, classNameIcon, textOption }) => {

  const changeClassNav = () => {
    let nav = document.getElementById('navigation-small-size');
    if ( nav ) {
      nav.classList.toggle('active');
      nav.classList.toggle('desactive');
    }
  };

  return (
    <a
      className="text-white d-flex flex-column justify-content-center text-decoration-none "
      href={ href }
      onClick={ changeClassNav }
    >
      <p className="card-icon text-center fs-4">
        <i className={ classNameIcon }></i>
      </p>
      <p className="mx-2">{ textOption }</p>
    </a>
  );
};

NavigationOptions.propTypes = {
  href: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string.isRequired,
  textOption: PropTypes.string.isRequired
};

export default NavigationOptions;