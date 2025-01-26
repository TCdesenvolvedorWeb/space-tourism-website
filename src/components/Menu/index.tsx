import { useEffect, useState } from "react";
import { LinkStyled, MenuHamburguer, Navegation, Options } from "@assets/styles/menu";

const Menu = () => {
  const [ selected, setSelected ] = useState<number>();

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
      <Navegation>
        <input type="checkbox" name="" id="menu-hamburguer" />
        <label htmlFor="menu-hamburguer" >
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>

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
      </Navegation>
    </>
  );
};

export { Menu };