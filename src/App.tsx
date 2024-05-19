import React from "react";

import { IMAGE_TYPES } from "./Constants";
import { ImageRenderer } from "./ImageRenderer";
function App() {
  return <ImageRenderer imageType={IMAGE_TYPES.DOG} />;
}

export default App;
