import { Container, Typography } from '@mui/material'
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

const PageDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export default function NotFound() {
  return (
    <PageContainer maxWidth="md">
      <PageTitle variant="h3" component="h1">
        Página não encontrada
      </PageTitle>
      <PageDescription variant="body1" color="text.secondary">
        O conteúdo solicitado não foi localizado. Volte para a página inicial.
      </PageDescription>
      <Typography color="primary">
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Ir para a Home
        </a>
      </Typography>
    </PageContainer>
  );
}
