import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';

export const metadata = {
  title: 'Preços',
  description:
    'Planos e preços para presença digital institucional com foco em SEO e métricas.'
};

const plans = [
  {
    title: 'Essencial',
    price: 'R$ 1.200/mês',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Profissional',
    price: 'R$ 2.400/mês',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Enterprise',
    price: 'Sob consulta',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
];



export default function PrecosPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom: 4, fontWeight: 700 }}>
        Preços
      </Typography>
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 1 }}>
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
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
    </Container>
  );
}
