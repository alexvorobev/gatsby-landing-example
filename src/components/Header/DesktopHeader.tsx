import React, { FC } from 'react';
import { HeaderProps } from './Header';
import styled from '@emotion/styled';
import { Container } from '../Container';
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
  z-index: 3;
  background-color: #fff;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

const HeaderMenuList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
`;

const HeaderMenuItem = styled.a`
  color: var(--color-text-secondary);
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none !important;

  @media (min-width: 1024px) {
    &:hover {
      color: var(--color-primary);
    }
  }
`;

export const DesktopHeader: FC<HeaderProps> = ({ title, items, callToAction }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderMenuList>
          {!!items &&
            items.map((item, index) => (
              <HeaderMenuItem href={`#${item.blockId}`} key={index}>
                {item.title}
              </HeaderMenuItem>
            ))}
        </HeaderMenuList>
        {!!callToAction && (
          <Button variant="secondary" rounded>
            {callToAction}
          </Button>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};
