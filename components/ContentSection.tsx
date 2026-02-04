import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {children}
      </Typography>
    </Box>
  );
}
