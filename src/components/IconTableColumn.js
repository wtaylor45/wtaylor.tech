import React from 'react';
import styled from 'styled-components';
import TableColumn from './TableColumn';

const Icon = styled.img`
    width: 20%;
    filter: ${props => props.shadowColor !== 'undefined' ? `drop-shadow(3px 3px 0px ${props.shadowColor})` : null};
    padding: 0;
`

const Title = styled.h1`
    font-size: calc(24px + 2vmin);
`

const IconTableColumn = ({ children, icon, shadowColor, border, title }) => (
    <TableColumn title={title} border={border}>
        <Icon shadowColor={shadowColor} src={icon}></Icon>
        <Title>
            {title}
        </Title>
        {children}
    </TableColumn>
);

export default IconTableColumn;