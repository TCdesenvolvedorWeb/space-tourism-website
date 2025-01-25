import styled from "styled-components";

const HeaderPage = styled.header`
    position: absolute;
    min-width: 1364px;
    max-width: 1440px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    font-size: 1.5rem;
`

const ContainerLogo = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    .logo{
        margin: 0 64px;
    }

    hr{
        border: solid 1px rgba(1000 , 1000 , 1000 , 20%);
        width: 406px;
        height: 0;
        position: absolute;
        left: 200px;
    }
`

export { ContainerLogo , HeaderPage }