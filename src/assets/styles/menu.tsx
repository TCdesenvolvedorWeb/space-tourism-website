import styled from "styled-components";
import { Link } from "react-router";

const Navegation = styled.nav`
  input {
    display: none;
  }

  label {
    display: none;
  }

  .hamburguer {
    width: 24px;
    display: block;
    position: relative;
    height: 3px;
    background-color: #fff;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .hamburguer::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: -10px;
  }

  .hamburguer::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    bottom: -10px;
  }

  @media (max-width: 812px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    label {
      display: block;
      position: absolute;
      top: 40px;
      right: 30px;
      z-index: 1;
    }

    input:checked ~ label .hamburguer {
      transform: rotate(45deg);
    }

    input:checked ~ label .hamburguer::before {
      transform: rotate(90deg);
      top: 0;
    }

    input:checked ~ label .hamburguer::after {
      transform: rotate(90deg);
      bottom: 0;
    }

    ul {
      width: 70vw;
      min-height: 100vh;
      display: none;
      background: #0b0d17ee;
      padding: 50px 30px;

      li {
        margin-bottom: 30px;
      }

      li:first-child {
        margin-left: 0;
      }

      li:after {
        display: none;
      }

      @media (max-width: 375px) {
        min-height: 1050px;
      }
    }

    .menu {
      display: block;
      align-self: flex-end;
    }

    input:checked ~ ul {
      display: block;
    }
  }
`;

const MenuHamburguer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 48px;
  width: 794px;
  height: 96px;
  background: linear-gradient(
    to right,
    rgba(1000, 1000, 1000, 15%),
    #0b0d1999,
    rgba(1000, 1000, 1000, 15%),
    #0b0d1999
  );
  color: #fff;
  font-family: "Barlow", sans serif;
  border: solid #0b0d17 1px;

  li:first-child {
    margin-left: 187px;
  }

  li.active {
    position: relative;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      width: 100%;
      bottom: -39px;
      border-bottom: solid 1px #fff;
    }
  }
`;

const Options = styled.li`
  position: relative;

  &:hover {
    &:after {
      position: absolute;
      content: "";
      left: 0;
      width: 100%;
      bottom: -39px;
      border-bottom: solid 1px gray;
    }
  }
`;

const LinkStyled = styled(Link)`
  color: #fff;
  font-family: "Barlow", sans serif;
  text-decoration: none;
`;

export { MenuHamburguer, Options, LinkStyled, Navegation };
