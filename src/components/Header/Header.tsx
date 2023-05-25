import React, { FC } from 'react';
import useDeviceKind from '../../hooks/useDeviceKind';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import styled from '@emotion/styled';

export type NavMenuItemType = {
  title: string;
  blockId: string;
};

export type NavMenuType = {
  items: NavMenuItemType[];
};

export type HeaderProps = {
  title?: string;
  items?: NavMenuItemType[];
  callToAction?: string;
};

const HeaderWrapper = styled.header`
  height: 4rem;
`;

export const Header: FC<HeaderProps> = (props) => {
  const isDesktop = useDeviceKind('desktop');

  if (!isDesktop) {
    return (
      <HeaderWrapper>
        <MobileHeader {...props} />
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <DesktopHeader {...props} />
    </HeaderWrapper>
  );
};
