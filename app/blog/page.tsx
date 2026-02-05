import {
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography
} from '@mui/material';

const blogPosts = [
  {
    slug: 'tendencias-digital-2024',
    title: 'Tendências digitais para 2024',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    slug: 'estrategia-conteudo',
    title: 'Estratégia de conteúdo para marcas institucionais',
    summary:
      'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
  },
  {
    slug: 'bi-metricas',
    title: 'Como BI melhora a tomada de decisão',
    summary:
      'Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam.',
  }
];

export const metadata = {
  title: 'Blog',
  description:
    'Artigos e insights sobre estratégia digital, SEO e métricas para empresas institucionais.'
};



export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom: 4, fontWeight: 700 }}>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.slug}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ marginBottom: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="button">
                  <a href={`/blog/${post.slug}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Ler artigo
                  </a>
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
