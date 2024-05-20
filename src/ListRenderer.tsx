import React from 'react';
import { NestedArrayEl } from './Constants';

interface ListRendererProps {
    listContent: NestedArrayEl[];
}


export function NestedListRenderer({listContent}: ListRendererProps) {
    const listToRender: React.JSX.Element[] = [];
    const getRenderList = (renderList: NestedArrayEl[]) => {
        for (const content of renderList) {
            if (Array.isArray(content) && content.length) {
                /* eslint-disable-next-line no-restricted-globals */
                listToRender.push(<ul key={self.crypto.randomUUID()}>{content.map((el: string) => <li key={self.crypto.randomUUID()}>{el}</li>)}</ul>);
            } else {
                /* eslint-disable-next-line no-restricted-globals */
                listToRender.push(<li key={self.crypto.randomUUID()}>{(content as string)}</li>);
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
