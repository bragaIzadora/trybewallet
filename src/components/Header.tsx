import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector((state: any) => state.user.email);

  return (
    <div>
      <div data-testid="email-field">
        Email:
        {userEmail}
      </div>
    </div>
  );
}

export default Header;
