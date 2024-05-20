import React, { useEffect, useState } from "react";

import { NestedListRenderer } from "./ListRenderer";
import { GetAllDogs } from "./Utils";
import { NestedArrayEl } from "./Constants";

export interface AllDogsRendererProps {
    queryFilter?: string;
}

export function AllDogsRenderer({queryFilter}: AllDogsRendererProps) {
    const [allDogs, setAllDogs] = useState([] as NestedArrayEl[]); 
    useEffect(() => {
        GetAllDogs().then((dogList: NestedArrayEl[]) => {
            if (queryFilter) {
                setAllDogs(dogList.filter((dog, index) => {
                    const isArrayAndKeep = Array.isArray(dog) && (dogList[index - 1] as string).startsWith(queryFilter);
                    return isArrayAndKeep || (typeof dog === 'string' && (dog as string).startsWith(queryFilter));
                }));
            } else {
                setAllDogs(dogList)
            }   
        });
    }, [queryFilter]);
    return <NestedListRenderer listContent={allDogs} />
}
