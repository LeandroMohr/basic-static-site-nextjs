import { Container, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ paddingBlock: (theme) => theme.spacing(6) }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom: (theme) => theme.spacing(2) }}>
        Página não encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: (theme) => theme.spacing(2) }}>
        O conteúdo solicitado não foi localizado. Volte para a página inicial.
      </Typography>
      <Typography color="primary">
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Ir para a Home
        </a>
      </Typography>
    </Container>
  );
}
