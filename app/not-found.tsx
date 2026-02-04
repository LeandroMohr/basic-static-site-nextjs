import { Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Ops! Essa página fugiu para o café ☕
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Procuramos nos arquivos, no backlog e até na sala do café, mas não achamos essa URL.
        Talvez ela ainda esteja em planejamento estratégico.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button component={Link} href="/" variant="contained">
          Voltar para a Home
        </Button>
        <Button component={Link} href="/blog" variant="outlined">
          Explorar o Blog
        </Button>
      </Stack>
    </Container>
  );
}
