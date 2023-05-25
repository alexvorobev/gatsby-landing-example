import React, { FC, useCallback, useEffect, useTransition } from 'react';
import { HeaderProps, NavMenuItemType } from './Header';
import styled from '@emotion/styled';
import { Button } from '../Button';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-bottom: 1px solid var(--color-divider);
  position: relative;
  z-index: 5;
  background-color: #fff;
`;

const RightSideGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuButton = styled(Button)`
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
`;

type HamburgerProps = {
  isOpen: boolean;
};

const HamburgerLine = styled.span`
  width: 1.2rem;
  height: 0.15rem;
  background-color: var(--color-primary-dark);
  display: block;
  margin: 0.2rem auto;
  border-radius: 0.125rem;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;

const HamburgerWrapper = styled.div<HamburgerProps>`
  color: #000;

  ${({ isOpen }) =>
    isOpen &&
    `
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        -webkit-transition-delay: 0.6s;
        -o-transition-delay: 0.6s;
        transition-delay: 0.6s;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    
        ${HamburgerLine}:nth-of-type(2) {
            width: 0rem;
        }

        ${HamburgerLine}:nth-of-type(1),
        ${HamburgerLine}:nth-of-type(3) {
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
        }

        ${HamburgerLine}:nth-of-type(1) {
            -webkit-transform: translateY(0.32rem);
            -ms-transform: translateY(0.32rem);
            -o-transform: translateY(0.32rem);
            transform: translateY(0.32rem);
        }

        ${HamburgerLine}:nth-of-type(3) {
            -webkit-transform: translateY(-0.35rem) rotate(90deg);
            -ms-transform: translateY(-0.35rem) rotate(90deg);
            -o-transform: translateY(-0.35rem) rotate(90deg);
            transform: translateY(-0.35rem) rotate(90deg);
        }
    `}
`;

const Overlay = styled.div<{ hidden?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 1.3s ease-in-out;
  opacity: 1;
`;

const HeaderStyleContext = styled.div<{ isOverlayFadeOut: boolean }>`
  height: 100%;

  ${({ isOverlayFadeOut }) =>
    isOverlayFadeOut &&
    `
            ${Overlay} {
                opacity: 0;
            }
        `}
`;

const Hamburger: FC<HamburgerProps> = ({ isOpen }) => {
  return (
    <HamburgerWrapper isOpen={isOpen}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerWrapper>
  );
};

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 100%;
  left: 50%;
  width: 100%;
  max-width: calc(100vw - 1.75rem);
  background-color: #fff;
  padding: 1.75rem 1.25rem;
  transform: translateX(-50%);
  margin-top: 1.5rem;
  border-radius: 1rem;
  opacity: 0;
  height: 0;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.05) 0px 0px 0px 1px,
    rgba(224, 242, 254, 0.4) 0px 20px 25px -5px, rgba(224, 242, 254, 0.4) 0px 8px 10px -6px;
  transition: height 0.3s ease-in-out, opacity 0.2s ease-in-out;
  overflow: hidden;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

type MenuProps = {
  isOpen: boolean;
  items?: NavMenuItemType[];
  onItemClick?: () => void;
  callToAction?: string;
};

const Menu: FC<MenuProps> = ({ isOpen, callToAction, items, onItemClick }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      menuRef.current!.style.height = '0px';
      menuRef.current!.style.opacity = '0';
    } else {
      menuRef.current!.style.height = `${listRef.current!.offsetHeight + 64}px`;
      menuRef.current!.style.opacity = '1';
    }
  }, [isOpen]);

  return (
    <MenuWrapper ref={menuRef}>
      <MenuList ref={listRef}>
        {items?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
        {callToAction && (
          <Button onClick={onItemClick} rounded>
            {callToAction}
          </Button>
        )}
      </MenuList>
    </MenuWrapper>
  );
};

export const MobileHeader: FC<HeaderProps> = ({ title, items, callToAction }) => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isContentDisplayed, setIsContentDisplayed] = React.useState(false);

  const toggleMenu = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current!);
    }

    if (!isMenuOpen) {
      setIsContentDisplayed(true);
    }

    setIsMenuOpen(!isMenuOpen);
    timeoutRef.current = setTimeout(() => {
      setIsContentDisplayed(!isMenuOpen);
    }, 1300);
  }, [isMenuOpen, timeoutRef]);

  return (
    <HeaderStyleContext isOverlayFadeOut={!isMenuOpen}>
      {isContentDisplayed && <Overlay data-fade-out="true" onClick={toggleMenu} />}
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        <RightSideGroup>
          <MenuButton onClick={toggleMenu} variant="secondary" rounded>
            <Hamburger isOpen={isMenuOpen} />
          </MenuButton>
        </RightSideGroup>
        {isContentDisplayed && (
          <Menu isOpen={isMenuOpen} items={items} callToAction={callToAction} />
        )}
      </HeaderWrapper>
    </HeaderStyleContext>
  );
};
