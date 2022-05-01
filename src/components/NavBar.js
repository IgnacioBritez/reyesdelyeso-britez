

import React from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  
} from "./NavBarElemnts"

// import logo from "./resyesdelyesoimg/img/logo.jpeg;";


function NavBar() {


  return (
    
    <Container>
      <Wrapper>
        <LogoContainer>

            <img src/>
        
        </LogoContainer>
        <Menu>
          <MenuItem>
            <MenuItemLink> Inicio </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink> Sahumerios </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink> Sahumos </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink> Figuras de yeso </MenuItemLink>
          </MenuItem>
          
        </Menu>
      </Wrapper>
    </Container>

  );
}

export default NavBar;