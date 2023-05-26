import React from 'react';
import styled from '@emotion/styled';

import { Container } from '../Container';

const FooterWrapper = styled.footer`
  padding: 3rem 0;

  @media (min-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <Container>
      <p>© 2021 - All rights reserved</p>
    </Container>
  </FooterWrapper>
);
