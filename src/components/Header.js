import React, { Fragment, useEffect, useState } from 'react';
import ContactIcon from './cards/ContactIcon';
import NavigationOptions from './cards/NavigationOptios';

import ImageTest from '../img/test-image.jpg';
import { listIconContact, listNavigationOptions } from '../data/Header';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Header.css';

const Header = () => {
  
  const [widthWindow, setWithWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWithWindow(window.innerWidth);
    });
  });
  const changeClassNav = () => {
    let nav = document.getElementById('navigation-small-size');
    nav.classList.toggle('active');
    nav.classList.toggle('desactive');
  };

  return (
    <Fragment>
      { widthWindow >= 900 ?
        <nav className="navigation d-flex flex-column align-items-center text-center" style={ {width: '23%'} }>
          <div className="container-image-me">
            <img src={ ImageTest } alt="Me" />
          </div>
          <h3>Eleomar Pedro Lorenzo</h3>
          <p className="mt-2">
            Hola, soy un desarrolador Front-End, bienvenido a mi sitio web
            personal, espero y lo disfrutes.
          </p>
          <section className="contact-icons d-flex flex-wrap justify-content-center">
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
          <section className="pt-4 d-flex flex-column align-items-start">
            {
              listNavigationOptions.map((object, index) =>
                <NavigationOptions
                  key={ index }
                  classNameIcon={ object.className }
                  href={ object.href }
                  isColorDark={ true }
                  textOption={ object.textNavigation }
                />
              )
            }
          </section>
        </nav>
        :
        <Fragment>
          <nav className="navigation desactive bg-dark pt-2" id="navigation-small-size">
            <section className="pt-2 d-flex flex-column align-items-center">
              {
                listNavigationOptions.map((object, index) =>
                  <NavigationOptions
                    key={ index }
                    classNameIcon={ object.className }
                    isColorDark={ false }
                    href={ object.href }
                    textOption={ object.textNavigation }
                  />
                )
              }
            </section>
            <section className="contact-icons mt-4 pt-4 pb-2 d-flex flex-wrap justify-content-center">
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
            </button>
          </div>
        </Fragment>
      }
    </Fragment>
  );
};

export default Header;