import React from 'react';
import './Header.css';

// assets
import flameLogo from '../../../public/assets/flame-logo.svg';

// Material UI
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

export function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img className="header-logo" src={flameLogo} alt="logo" width="100px" />
      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}
