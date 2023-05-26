import React from 'react';

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: 'lightblue', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img id="footerlogo" src="mascot.png" alt="" style={{ marginBottom: '10px' }} />
      <p style={{ color: 'blue' }}>© 2023 CALL NOW! (415) 580-0001</p>
    </div>
  );
}

export default Footer;