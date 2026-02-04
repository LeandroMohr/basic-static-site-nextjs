import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  TypographyProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const serviceCards = [
  {
    title: 'Consultoria',
    description:
      'Diagnóstico completo da presença digital, análise de conteúdo e plano de evolução.',
    href: '/servicos/consultoria'
  },
  {
    title: 'Implementação',
    description:
      'Criação do site institucional com foco em performance, acessibilidade e SEO técnico.',
    href: '/servicos/implementacao'
  },
  {
    title: 'Suporte',
    description:
      'Monitoramento contínuo, atualizações de conteúdo e acompanhamento de métricas.',
    href: '/servicos/suporte'
  }
];

export const metadata = {
  title: 'Serviços',
  description: 'Conheça os serviços disponíveis para criar e evoluir seu site institucional.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700
}));

const PageSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(4)
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textDecoration: 'none',
  display: 'block',
  border: `1px solid ${theme.palette.grey[200]}`
}));

const ServiceCardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary
}));

const OutroWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5)
}));

const OutroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(1)
}));

export default function ServicosPage() {
  return (
    <PageContainer maxWidth="lg">
      <PageTitle variant="h3" component="h1">
        Serviços
      </PageTitle>
      <PageSubtitle variant="body1" color="text.secondary">
        Organize o projeto em três frentes principais para acelerar a entrega e garantir qualidade
        contínua.
      </PageSubtitle>
      <Grid container spacing={3}>
        {serviceCards.map((card) => (
          <Grid item xs={12} md={4} key={card.title}>
            <ServiceCard
              component={Link}
              href={card.href}
            >
              <CardContent>
                <ServiceCardTitle variant="h5">
                  {card.title}
                </ServiceCardTitle>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
      <OutroWrapper>
        <OutroTitle variant="h6">
          Precisa de um pacote completo?
        </OutroTitle>
        <Typography variant="body2" color="text.secondary">
          Combine consultoria, implementação e suporte para ter um site institucional atualizado
          continuamente.
        </Typography>
      </OutroWrapper>
    </PageContainer>
  );
}
