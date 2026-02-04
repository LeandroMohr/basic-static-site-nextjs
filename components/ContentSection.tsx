import { Box, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

type ContentSectionProps = {
  title: string;
  children: ReactNode;
};

const SectionWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4)
}));

const SectionTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <SectionWrapper>
      <SectionTitle variant="h4">
        {title}
      </SectionTitle>
      <Typography variant="body1" color="text.secondary">
        {children}
      </Typography>
    </SectionWrapper>
  );
}
