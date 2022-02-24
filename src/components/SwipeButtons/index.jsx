import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

export function SwipeButtons() {
  return (
    <div className="swipe-buttons-container">
      <IconButton className="swipe-button repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button left">
        <CloseIcon fontSize="large" fontWeight="bold" />
      </IconButton>
      <IconButton className="swipe-button star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-button lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};