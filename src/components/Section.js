import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* min-height: ${props => props.height || '300px'}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;
    width: 100%;
`;

const SectionTitle = styled.div`
  position: relative;
  top: calc(18px + 1vmin);
  font-size: calc(36px + 2vmin);
  font-weight: 900;
  line-height: 1;
  z-index: 1;
  text-align: center;
  color: white;
`;

const Content = styled.div`
  position: relative;
  top: 0;
  background: ${props => props.backgroundColor || 'none'};
  padding: 12px;
  font-size: calc(8px + 2vmin);
  border-radius: 10px;
  border: ${props => props.borderWidth + ' solid ' + props.borderColor};
  width: 100%;
`;

const Text = styled.div`
  margin-top: 3vh;
  text-align: center;
  align-self: center;
  font-weight: 100;
`;

const Section = ({ title, backgroundColor, borderColor, borderWidth, children }) => (
  <Container>
    <SectionTitle>{title.toUpperCase()}</SectionTitle>
    <Content borderColor={borderColor} borderWidth={borderWidth} backgroundColor={backgroundColor}>
      <Text>{children}</Text>
    </Content>
  </Container>
);

export default Section;
