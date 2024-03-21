import React, { useEffect } from 'react';
import M from 'materialize-css';

const NoPage = () => {
  useEffect(() => {
    // Call the function from the imported JavaScript file
  }, []);
  return <h1>404</h1>;
};

export default NoPage;