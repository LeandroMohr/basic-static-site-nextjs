'use client';

import { Box, Button, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

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
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        p: 3,
        zIndex: 1300
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body2">
          Utilizamos cookies e tecnologias similares para analisar métricas e melhorar a
          experiência do usuário, em conformidade com a LGPD.
        </Typography>
        <Button variant="contained" onClick={handleAccept}>
          Aceitar
        </Button>
      </Box>
    </Paper>
  );
}
