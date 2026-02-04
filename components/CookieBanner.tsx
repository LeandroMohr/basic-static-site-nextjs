'use client';

import { Box, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

const BannerPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  padding: theme.spacing(3),
  zIndex: 1300
}));

const BannerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setAccepted(stored === 'accepted');
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <BannerPaper elevation={3}>
      <BannerContent>
        <Typography variant="body2">
          Utilizamos cookies e tecnologias similares para analisar métricas e melhorar a
          experiência do usuário, em conformidade com a LGPD.
        </Typography>
        <Button variant="contained" onClick={handleAccept}>
          Aceitar
        </Button>
      </BannerContent>
    </BannerPaper>
  );
}
