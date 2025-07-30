import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'black' }}>
      <h1>Mi Tienda</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#">Remeras</a></li>
        <li><a href="#">Buzos</a></li>
        <li><a href="#">Camperas</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
