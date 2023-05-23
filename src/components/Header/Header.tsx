import React, { FC } from "react";
import useDeviceKind from "../../hooks/useDeviceKind";
import { MobileHeader } from "./MobileHeader";
import styled from "@emotion/styled";

export type NavMenuItemType = {
    title: string;
    blockId: string;
};

export type NavMenuType = {
    items: NavMenuItemType[];
};

export type HeaderProps = {
    title?: string;
    items?: NavMenuType;
}

const HeaderWrapper = styled.header`
    height: 4rem;
`;

export const Header: FC<HeaderProps> = (props) => {
    const isMobile = useDeviceKind('mobile');

    if(isMobile) {
        return (
            <HeaderWrapper>
                <MobileHeader {...props} />
            </HeaderWrapper>
        )
    }

    return (
        <HeaderWrapper>
            <h1>Desktop</h1>
        </HeaderWrapper>
    );
};