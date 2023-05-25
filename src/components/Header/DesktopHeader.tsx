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

export const DesktopHeader: FC<HeaderProps> = ({ title, callToAction }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        <div>menu</div>
        {!!callToAction && (
          <Button variant="secondary" rounded>
            {callToAction}
          </Button>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};
