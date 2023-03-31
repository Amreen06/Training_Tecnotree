import React from 'react';

function Header(props) {
  const { title = 'Default Title', subtitle = 'Default Subtitle' } = props;

  return (<center>
    <header>
      <h1 class="at">{title}</h1>
      <h2 class="at">{subtitle}</h2>
    </header></center>
  );
}

export default Header;