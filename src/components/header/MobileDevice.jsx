import ContactIcon from '../cards/ContactIcon';
import NavigationOptions from '../cards/NavigationOptions';

import PropTypes from 'prop-types';

const MobileDevice = ({ listIconContact, listNavigationOptions }) => {
  const changeClassNav = () => {
    let nav = document.getElementById('navigation-small-size');
    nav.classList.toggle('active');
    nav.classList.toggle('desactive');
  };


  return (
    <>
      <nav className="navigation desactive pt-2" id="navigation-small-size">
        <section className="pt-2 d-flex flex-column align-items-center">
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
        <section className="mt-4 pt-4 pb-2 d-flex flex-wrap justify-content-center">
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
      </nav>
      <div className="menu-button">
        <button type="button" onClick={ changeClassNav }>
          <i className="bi bi-list"></i>
          <span className="visually-hidden-focusable">Menú</span>
        </button>
      </div>
    </>
  );
};

MobileDevice.propTypes = {
  listIconContact: PropTypes.array.isRequired,
  listNavigationOptions: PropTypes.array.isRequired
};

export default MobileDevice;