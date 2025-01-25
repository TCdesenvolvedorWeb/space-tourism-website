import styled from "styled-components";
import { Link } from "react-router";

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

  li.active{
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

export { MenuHamburguer, Options, LinkStyled };