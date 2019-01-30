import React from 'react';
import Table from './Table';
import IconTableColumn from './IconTableColumn';
import List from '../containers/List';
import web from '../web.svg';
import tool from '../tools.svg';

const TechTable = ({ languages, tools }) =>
    <Table>
        <IconTableColumn icon={web} title="Languages I Use" border={true}>
            <List elements={languages} />
        </IconTableColumn>
        <IconTableColumn icon={tool} title="My Toolbelt" border={false}>
            <List elements={tools} />
        </IconTableColumn>
    </Table>

export default TechTable;