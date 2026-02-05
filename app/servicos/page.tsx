import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';
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

const fadeInUpAnimation = {
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};



export default function ServicosPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Box sx={{
        ...fadeInUpAnimation,
        animation: 'fadeInUp 0.8s ease-out',
      }}>
        <Typography variant="h3" component="h1" sx={{ marginBottom: 2, fontWeight: 700 }}>
          Serviços
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 4 }}>
          Organize o projeto em três frentes principais para acelerar a entrega e garantir qualidade
          contínua.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {serviceCards.map((card, index) => (
          <Grid item xs={12} md={4} key={card.title} sx={{
            ...fadeInUpAnimation,
            animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s backwards`,
          }}>
            <Link href={card.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <Card sx={{ 
                height: '100%', 
                border: '1px solid', 
                borderColor: 'grey.200',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 24px rgba(27, 94, 32, 0.15)'
                }
              }}>
                <CardContent>
                  <Typography variant="h5" sx={{ marginBottom: 1, color: 'text.primary', fontWeight: 600 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ 
        marginTop: 5,
        ...fadeInUpAnimation,
        animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
      }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Precisa de um pacote completo?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Combine consultoria, implementação e suporte para ter um site institucional atualizado
          continuamente.
        </Typography>
      </Box>
    </Container>
  );
}
