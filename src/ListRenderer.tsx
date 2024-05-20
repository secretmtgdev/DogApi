import React from 'react';
import { NestedArrayEl } from './Constants';

interface ListRendererProps {
    listContent: NestedArrayEl[];
}


export function NestedListRenderer({listContent}: ListRendererProps) {
    const listToRender: React.JSX.Element[] = [];
    console.error(listContent);
    const getRenderList = (renderList: NestedArrayEl[]) => {
        for (const content of renderList) {
            if (Array.isArray(content) && content.length) {
                console.error('RENDERING NEW LIST');
                listToRender.push(<ul>{content.map((el: string) => <li>{el}</li>)}</ul>);
            } else {
                listToRender.push(<li>{(content as string)}</li>);
            }
        }
    }

    getRenderList(listContent);
    return (
        <ul>
            {listToRender.map(content => content)}
        </ul>
    )
}
