import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Librarycom/Library";
function Main() {
  return (
    <div>

        <Routes>
          <Route path="/library" element={<Library />} />
        </Routes>
    

    </div>
  );
}

export default Main;
