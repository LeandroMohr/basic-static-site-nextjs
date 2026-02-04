import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import Link from 'next/link';
import ContentSection from '../components/ContentSection';

export const metadata = {
  title: 'Home',
  description:
    'Conheça nosso produto institucional com foco em performance digital e métricas.'
};



export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" sx={{ marginBottom: 2, fontWeight: 700 }}>
            Solução digital para presença institucional
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum vestibulum.
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
          <Box sx={{
            backgroundColor: 'grey.200',
            height: { xs: 240, md: 320 },
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="h6" color="text.secondary">
              Espaço para imagem do produto
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 600 }}>
          Navegação rápida
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: 5 }}>
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
              <Card sx={{
                height: '100%',
                textDecoration: 'none',
                display: 'block',
                border: '1px solid',
                borderColor: 'grey.200'
              }}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <CardActionArea sx={{
                    height: '100%',
                    alignItems: 'stretch',
                    textAlign: 'left',
                    padding: 1
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{
                        marginBottom: 1,
                        color: 'text.primary'
                      }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
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
      </Box>
    </Container>
  );
}
