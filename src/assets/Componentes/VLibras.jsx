import React, { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;


    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
