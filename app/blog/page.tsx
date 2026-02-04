import {
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  Button
} from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blogPosts } from '../../data/posts';

export const metadata = {
  title: 'Blog',
  description:
    'Artigos e insights sobre estratégia digital, SEO e métricas para empresas institucionais.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 700
}));

const PostCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
});

const PostCardContent = styled(CardContent)({
  flexGrow: 1
});

const PostTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(1)
}));

export default function BlogPage() {
  return (
    <PageContainer maxWidth="lg">
      <PageTitle variant="h3" component="h1">
        Blog
      </PageTitle>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.slug}>
            <PostCard>
              <PostCardContent>
                <PostTitle variant="h5">
                  {post.title}
                </PostTitle>
                <Typography variant="body2" color="text.secondary">
                  {post.summary}
                </Typography>
              </PostCardContent>
              <CardActions>
                <Button href={`/blog/${post.slug}`} size="small">
                  Ler artigo
                </Button>
              </CardActions>
            </PostCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
