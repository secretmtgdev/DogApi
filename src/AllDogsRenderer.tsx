import React, { useEffect, useState } from "react";

import { NestedListRenderer } from "./ListRenderer";
import { GetAllDogs } from "./Utils";
import { NestedArrayEl } from "./Constants";

export function AllDogsRenderer() {
    const [allDogs, setAllDogs] = useState([] as NestedArrayEl[]);
    useEffect(() => {
        GetAllDogs().then((dogList: NestedArrayEl[]) => setAllDogs(dogList));
    }, []);
    return <NestedListRenderer listContent={allDogs} />
}