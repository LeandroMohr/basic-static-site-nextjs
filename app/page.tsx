import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  TypographyProps,
  CardActionAreaProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import ContentSection from '../components/ContentSection';

export const metadata = {
  title: 'Home',
  description:
    'Conheça nosso produto institucional com foco em performance digital e métricas.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const HeroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700
}));

const HeroDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(3)
}));

const HeroImagePlaceholder = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  height: 240,
  borderRadius: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    height: 320
  }
}));

const SectionsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6)
}));

const QuickNavTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600
}));

const QuickNavGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(5)
}));

const QuickNavCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textDecoration: 'none',
  display: 'block',
  border: `1px solid ${theme.palette.grey[200]}`
}));

const QuickNavCardLink = styled(CardActionArea)<CardActionAreaProps>(({ theme }) => ({
  height: '100%',
  alignItems: 'stretch',
  textAlign: 'left',
  padding: theme.spacing(1)
}));

const QuickNavCardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary
}));

export default function HomePage() {
  return (
    <PageContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <HeroTitle variant="h3" component="h1">
            Solução digital para presença institucional
          </HeroTitle>
          <HeroDescription variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum vestibulum.
          </HeroDescription>
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
          <HeroImagePlaceholder>
            <Typography variant="h6" color="text.secondary">
              Espaço para imagem do produto
            </Typography>
          </HeroImagePlaceholder>
        </Grid>
      </Grid>

      <SectionsWrapper>
        <QuickNavTitle variant="h4">
          Navegação rápida
        </QuickNavTitle>
        <QuickNavGrid container spacing={3}>
          {[
            {
              title: 'Serviços',
              description: 'Visão geral dos pacotes disponíveis para o site.',
              href: '/servicos'
            },
            {
              title: 'Sobre',
              description: 'Conheça a missão, visão e diferenciais da empresa.',
              href: '/sobre'
            },
            {
              title: 'Preços',
              description: 'Compare planos e escolha o melhor formato para sua equipe.',
              href: '/precos'
            },
            {
              title: 'Blog',
              description: 'Conteúdos editoriais para apoiar a estratégia digital.',
              href: '/blog'
            }
          ].map((item) => (
            <Grid item xs={12} md={3} key={item.title}>
              <QuickNavCard>
                <QuickNavCardLink LinkComponent={Link} href={item.href}>
                  <CardContent>
                    <QuickNavCardTitle variant="h6">
                      {item.title}
                    </QuickNavCardTitle>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </QuickNavCardLink>
              </QuickNavCard>
            </Grid>
          ))}
        </QuickNavGrid>
        <ContentSection title="Por que escolher nossa solução?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed arcu at quam posuere
          cursus. Phasellus feugiat, sapien a ullamcorper consequat, justo mi tincidunt massa, at
          vulputate tortor erat sed nulla.
        </ContentSection>
        <ContentSection title="Experiência orientada a dados">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ipsum in
          pulvinar tincidunt, sem neque placerat mauris, vitae luctus orci urna non quam.
        </ContentSection>
        <ContentSection title="Conteúdo institucional de alta qualidade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, sem sit amet
          pulvinar bibendum, nibh libero luctus nisi, a fermentum nisi eros sed arcu.
        </ContentSection>
      </SectionsWrapper>
    </PageContainer>
  );
}
