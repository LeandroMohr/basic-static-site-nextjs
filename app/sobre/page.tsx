import { Container, Grid, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentSection from '../../components/ContentSection';

export const metadata = {
  title: 'Sobre',
  description:
    'Saiba mais sobre nossa missão, visão e abordagem para produtos digitais institucionais.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 700
}));

export default function SobrePage() {
  return (
    <PageContainer maxWidth="lg">
      <PageTitle variant="h3" component="h1">
        Sobre nós
      </PageTitle>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContentSection title="Nossa missão">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
          </ContentSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentSection title="Nossa visão">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet.
          </ContentSection>
        </Grid>
        <Grid item xs={12}>
          <ContentSection title="O que entregamos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </ContentSection>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
