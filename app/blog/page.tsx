import { Card, CardContent, CardActions, Container, Grid, Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { blogPosts } from '../../data/posts';

export const metadata = {
  title: 'Blog',
  description:
    'Artigos e insights sobre estratégia digital, SEO e métricas para empresas institucionais.'
};

export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 700 }}>
        Blog
      </Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Insights, tendências e boas práticas para presença digital institucional.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat mattis eros.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.slug}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href={`/blog/${post.slug}`} size="small">
                  Ler artigo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
