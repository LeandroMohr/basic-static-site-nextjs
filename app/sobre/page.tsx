import { Container, Grid, Typography } from '@mui/material';
import ContentSection from '../../components/ContentSection';

export const metadata = {
  title: 'Sobre',
  description:
    'Saiba mais sobre nossa missão, visão e abordagem para produtos digitais institucionais.'
};

export default function SobrePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 700 }}>
        Sobre nós
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContentSection title="Nossa missão">
            Entregar experiências digitais institucionais que conectam marcas ao público certo,
            com foco em performance, acessibilidade e clareza das informações.
          </ContentSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentSection title="Nossa visão">
            Ser a plataforma base para equipes que precisam lançar sites institucionais rápidos,
            com SEO consistente e integrações de BI prontas para evoluir.
          </ContentSection>
        </Grid>
        <Grid item xs={12}>
          <ContentSection title="O que entregamos">
            Uma arquitetura modular com páginas essenciais, blog para conteúdos estratégicos e um
            layout responsivo adaptado para desktop, tablet e mobile. Tudo pronto para campanhas e
            análises de dados.
          </ContentSection>
        </Grid>
      </Grid>
    </Container>
  );
}
