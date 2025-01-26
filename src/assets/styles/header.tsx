import styled from "styled-components";

const HeaderPage = styled.header`
  position: absolute;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  @media(min-width: 875px) {
    min-width: 1365px;
  }

  @media (max-width: 875px) {
    max-width: 875px;
    justify-content: center;
  }

  @media (max-width: 812px) {
    min-width: 100%;
    justify-content: space-between;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  .logo {
    margin: 0 64px;
  }

  hr {
    border: solid 1px rgba(1000, 1000, 1000, 20%);
    width: 406px;
    height: 0;
    position: absolute;
    left: 200px;
  }

  @media (max-width: 875px) {
    hr {
      display: none;
    }

    .logo{
      margin-left: 100px;
    }
  }

  @media (max-width: 812px) {
    .logo{
      margin-left: 30px;
    }
  }
`;

export { ContainerLogo, HeaderPage };
