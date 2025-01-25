import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
  const [ selected, setSelected ] = useState(Number);
  console.log(selected);

  useEffect(() => {
    const storedValue = localStorage.getItem('selected');

    if (storedValue) return setSelected(Number(storedValue));

  },[])

  const handleOptionsClick = (index: number) => {
    setSelected(index);
    localStorage.setItem('selected', index.toString());
  };
  
  return (
    <>
      <nav>
        <MenuHamburguer>
          <Options 
            onClick={() => handleOptionsClick(0)} 
            className={ selected === 0 ? "active" : ""}>
            <LinkStyled to={"/"}>00 HOME</LinkStyled>
          </Options>
          <Options
            onClick={() => handleOptionsClick(1)} 
            className={ selected === 1 ? "active" : ""}>
            <LinkStyled to={"/destination"}>01 DESTINATION</LinkStyled>
          </Options>
          <Options
            onClick={() => handleOptionsClick(2)} 
            className={ selected === 2 ? "active" : ""}>
            <LinkStyled to={"/crew"}>02 CREW</LinkStyled>
          </Options>
          <Options
            onClick={() => handleOptionsClick(3)} 
            className={ selected === 3 ? "active" : ""}>
            <LinkStyled to={"/technology"}>03 TECHNOLOGY</LinkStyled>
          </Options>
        </MenuHamburguer>
      </nav>
    </>
  );
};

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

export { Menu };
