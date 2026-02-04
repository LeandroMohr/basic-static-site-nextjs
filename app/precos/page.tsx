import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 700
}));

const PlanCard = styled(Card)({
  height: '100%'
});

const PlanTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}));

const PlanPrice = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export default function PrecosPage() {
  return (
    <PageContainer maxWidth="lg">
      <PageTitle variant="h3" component="h1">
        Preços
      </PageTitle>
      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <PlanCard>
              <CardContent>
                <PlanTitle variant="h5">
                  {plan.title}
                </PlanTitle>
                <PlanPrice variant="h6" color="primary">
                  {plan.price}
                </PlanPrice>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </CardContent>
            </PlanCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
