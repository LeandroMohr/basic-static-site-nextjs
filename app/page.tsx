import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import ContentSection from '../components/ContentSection';

export const metadata = {
  title: 'Home',
  description:
    'Conheça nosso produto institucional com foco em performance digital e métricas.'
};

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Solução digital para presença institucional
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Transforme a presença digital do seu cliente com uma estrutura institucional pensada
            para SEO, performance e métricas confiáveis. Conteúdos claros, navegação fluida e
            insights de BI para decisões rápidas.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large">
              Fale com a equipe
            </Button>
            <Button variant="outlined" size="large">
              Ver preços
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: 'grey.200',
              height: { xs: 240, md: 320 },
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Mockup do produto institucional
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <ContentSection title="Por que escolher nossa solução?">
          Estruturamos páginas institucionais com foco em credibilidade, clareza e conversão. O
          conteúdo é modular, fácil de evoluir e pronto para integrar campanhas digitais.
        </ContentSection>
        <ContentSection title="Experiência orientada a dados">
          Acompanhe métricas de tráfego, engajamento e funil com scripts de BI prontos para integrar.
          Tenha relatórios acionáveis que sustentam decisões estratégicas.
        </ContentSection>
        <ContentSection title="Conteúdo institucional de alta qualidade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, sem sit amet
          pulvinar bibendum, nibh libero luctus nisi, a fermentum nisi eros sed arcu.
        </ContentSection>
      </Box>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {[
          { title: '+38%', text: 'Aumento médio em sessões orgânicas.' },
          { title: '7 dias', text: 'Tempo médio para lançar a primeira versão.' },
          { title: '100%', text: 'Compatível com dispositivos móveis.' }
        ].map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
