import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  font-size: 14px;

  img {
    height: 18px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 14px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  const [burgerStatus, setburgerStatus] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="tesla.com">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="tesla.com">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="tesla.com">Shop</a>
        <a href="tesla.com">Tesla Account</a>
        <CustomMenu onClick={() => setburgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="tesla.com">{car}</a>
            </li>
          ))}
        <li>
          <a href="tesla.com">Existing Inventory</a>
        </li>
        <li>
          <a href="tesla.com">Used Inventory</a>
        </li>
        <li>
          <a href="tesla.com">Trade-in</a>
        </li>
        <li>
          <a href="tesla.com">Cybertruck</a>
        </li>
        <li>
          <a href="tesla.com">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
