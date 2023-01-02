import styled from 'styled-components';

const Presentation = () => {
  return (
    <ContainerPresentation id="presentation">
      <MyPresentationContainer>
        <h1 style={ {fontSize: '1.75rem'} }>Eleomar Pedro Lorenzo</h1>
        <h2 style={ {fontSize: '1.5rem'} }>Desarrollador web</h2>
      </MyPresentationContainer>
      <div className="row row-cols-md-2 align-items-center justify-content-end">
        <ContainerPhoto>
          <ContainerImage>
            <picture>
              <source
                srcSet={ require('../img/myImage.webp') }
              />
              <Image
                src={ require('../img/myImage.png') }
                alt="Imagen de presentación"
              />
            </picture>
          </ContainerImage>
        </ContainerPhoto>
        <InformationMe className="text-justify">
          <p>
            ¡Hola !!, soy Ingeniero en Sistemas Computacionales
            y me especializo en el desarrollo frontend y backend de páginas web,
            con más tendencia en el front-end.
          </p>
          <p>
            Me gusta estar aprendiendo cosas nuevas, es por eso que me considero autodidacta.
          </p>
        </InformationMe>
      </div>
    </ContainerPresentation>
  );
};

const ContainerPresentation = styled.section`
  position: relative;
  margin-top: 2rem;
  @media only screen and (max-width: 900px) {
    position: static;
  }
  @media only screen and (max-width: 768px) {
    position: static;
    margin-top: 0;
  }
`;
const ContainerPhoto = styled.div`
  width: 25%;
  @media only screen and (max-width: 900px) {
    width: 30%;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;
const ContainerImage = styled.div`
  width: 12.5rem;
  height: auto;
  position: absolute;
  left: 0.5rem;
  bottom: -2.5rem;
  @media only screen and (max-width: 1000px) {
    bottom: -2.5rem;
    width: 11rem;
  }
  @media only screen and (max-width: 900px) {
    left: 0;
    position: static;
  }
  @media only screen and (max-width: 768px) {
    position: static;
    padding-bottom: 0.5rem;
    right: 0;
    bottom: 0;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  
  object-fit: contain;
  border-radius: 10%;
`;
const MyPresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;
const InformationMe = styled.div`
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Presentation;