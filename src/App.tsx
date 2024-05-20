import React, { useEffect, useState } from "react";

import { AllDogsRenderer } from "./AllDogsRenderer";
// import { IMAGE_TYPES } from "./Constants";
// import { ImageRenderer } from "./ImageRenderer";
function App() {
  // return <ImageRenderer imageType={IMAGE_TYPES.DOG} />;
  const [filter, setFilter] = useState('');
  useEffect(() => setFilter(filter), [filter]);
  return (
    <>
      <label htmlFor='dogFilter'>Filter by breed</label><br />
      <input id='dogFilter' type='text' onChange={(event) => setFilter(event.target.value)} />
      <AllDogsRenderer queryFilter={filter} />
    </>);
}

export default App;
