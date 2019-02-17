import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const List = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 200px;
    padding-top: 12px;
    flex-wrap: wrap;
`

export const IconList = ({icons, width, height}) => 
    <List>
        {icons.map(icon => <Icon link={icon.link} img={icon.img} width={width} height={height} />)}
    </List>
