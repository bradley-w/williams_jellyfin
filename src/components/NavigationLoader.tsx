'use client';
import React from 'react';
import '../app/globals.css';
import { Box, CircularProgress } from '@mui/material';
import jellyfinLogo from '../public/jellyfin.svg';
import Image from 'next/image';

const LOADER_THRESHOLD = 250;

const NavigationLoader = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const startLoading = () =>
      (timer = setTimeout(() => setIsLoading(true), LOADER_THRESHOLD));

    const stopLoading = () => {
      if (timer) {
        clearTimeout(timer);
        setIsLoading(false);
      }
    };

    window.addEventListener('navigationstart', startLoading);
    window.addEventListener('navigateend', stopLoading);
    window.addEventListener('navigateerror', stopLoading);

    return () => {
      window.removeEventListener('navigationstart', startLoading);
      window.removeEventListener('navigateend', stopLoading);
      window.removeEventListener('navigateerror', stopLoading);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <Box className="jellyfin-loader-container">
      <Box className="jellyfin-loader-content">
        <Image
          src={jellyfinLogo}
          alt="Jellyfin Logo"
          className="jellyfin-logo"
        />
        <CircularProgress className="jellyfin-loader" size={100} />
      </Box>
    </Box>
  );
};

export default NavigationLoader;
