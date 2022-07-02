import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className="d-flex flex-wrap justify-content-center text-center">
      <p>&#169; 2021, Creado con 💚💚 por <span className="fw-bold">Eleomar Pedro Lorenzo</span></p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: absolute;
  background: var(--background-footer);
  right: 0;

  padding-top: 1rem;

  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 0.01rem;

  width: 77%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export default Footer;