import { Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

export const metadata = {
  title: 'Preços',
  description:
    'Planos e preços para presença digital institucional com foco em SEO e métricas.'
};

const plans = [
  {
    title: 'Essencial',
    price: 'R$ 1.200/mês',
    description: 'Homepage, sobre, preços e blog com layout responsivo.'
  },
  {
    title: 'Profissional',
    price: 'R$ 2.400/mês',
    description: 'Integração de BI, relatórios mensais e otimizações de SEO.'
  },
  {
    title: 'Enterprise',
    price: 'Sob consulta',
    description: 'Projetos customizados, múltiplos idiomas e suporte dedicado.'
  }
];

const highlights = [
  'Consultoria para estratégia de conteúdo',
  'Template institucional pronto para campanhas',
  'Suporte à integração com ferramentas de BI',
  'Componentes MUI otimizados para performance'
];

export default function PrecosPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 700 }}>
        Preços
      </Typography>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="body1" color="text.secondary">
          Escolha o plano ideal para o momento digital do seu cliente. Todos incluem suporte e
          estrutura responsiva.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
          vestibulum vestibulum.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={1} sx={{ mt: 4 }}>
        <Typography variant="h6">O que está incluso</Typography>
        {highlights.map((item) => (
          <Typography key={item} variant="body2" color="text.secondary">
            • {item}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}
