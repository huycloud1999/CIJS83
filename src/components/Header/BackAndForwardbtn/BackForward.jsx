import React from "react";
import { useNavigate } from "react-router-dom";
function BackForward() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)} style={{cursor:'not-allowed'}}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
    </div>
  );
}

export default BackForward;
