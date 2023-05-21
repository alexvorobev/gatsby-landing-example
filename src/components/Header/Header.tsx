import React, { FC } from "react";
import styled from "@emotion/styled";
import useDeviceKind from "../../hooks/useDeviceKind";
import { Button } from "../Button";

type NavMenuItemType = {
  title: string;
  blockId: string;
};

interface HeaderProps {
  title: string;
  items: NavMenuItemType[];
  callToAction?: string;
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 1024px) {
    padding: 20px 0;
    margin-bottom: 32px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 64px);
  background: var(--background);
  padding: 20px 20px 64px;
  z-index: 999;
  box-sizing: border-box;
`;

const MenuItem = styled.a`
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;
  color: var(--text);

  &:hover {
    color: var(--link);
  }

  @media (min-width: 1024px) {
    font-weight: 600;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

const StyledBurger = styled.button<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  color: var(--text);

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 3px;
    background: var(--text);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Header: FC<HeaderProps> = ({ title, items, callToAction }) => {
  const isDesktop = useDeviceKind("desktop");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <RightSideContainer>
          {isDesktop && (
            <MenuList>
              {items.map((item, index) => (
                <MenuItem key={index}>{item.title}</MenuItem>
              ))}
            </MenuList>
          )}
          {isDesktop && callToAction && <Button>{callToAction}</Button>}

          {!isDesktop && (
            <>
              <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
              </StyledBurger>
              <Menu isOpen={isOpen}>
                <div />
                <MenuList onClick={() => setIsOpen(!isOpen)}>
                  {items.map((item, index) => (
                    <MenuItem key={index}>{item.title}</MenuItem>
                  ))}
                </MenuList>
                {callToAction && <Button>{callToAction}</Button>}
              </Menu>
            </>
          )}
        </RightSideContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
