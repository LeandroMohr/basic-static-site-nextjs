import { Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Página não encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        O conteúdo solicitado não foi localizado. Volte para a página inicial.
      </Typography>
      <Typography component={Link} href="/" color="primary">
        Ir para a Home
      </Typography>
    </Container>
  );
}
