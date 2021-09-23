import PropTypes from 'prop-types';

import ContactIcon from '../cards/ContactIcon';
import NavigationOptions from '../cards/NavigationOptions';

const DesktopDevice = ({ listIconContact, listNavigationOptions }) => {
  return (
    <nav className="navigation d-flex flex-column align-items-center text-center" style={ {width: '23%'} }>
      <div className="container-image-me">
        <picture>
          <source
            srcSet={ require('../../img/myPhoto.webp').default }
          />
          <img src={ require('../../img/myPhoto.png').default } alt="Me" />
        </picture>
      </div>
      <h3>Eleomar Pedro Lorenzo</h3>
      <p className="mt-2">
        Hola, soy un desarrolador Front-End, bienvenido a mi sitio web
        personal, espero y lo disfrutes.
      </p>
      <section className="d-flex flex-wrap justify-content-center">
        {
          listIconContact.map(( object, index ) =>
            <ContactIcon
              key={ index }
              href={ object.href }
              classNameIcon={ object.className }
            />
          )
        }
      </section>
      <section className="pt-4 d-flex flex-column align-items-center">
        {
          listNavigationOptions.map((object, index) =>
            <NavigationOptions
              key={ index }
              classNameIcon={ object.className }
              href={ object.href }
              textOption={ object.textNavigation }
            />
          )
        }
      </section>
    </nav>
  );
};

DesktopDevice.propTypes = {
  listIconContact: PropTypes.array.isRequired,
  listNavigationOptions: PropTypes.array.isRequired
};

export default DesktopDevice;