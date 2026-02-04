import { Container, Typography } from '@mui/material';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    slug: 'tendencias-digital-2024',
    title: 'Tendências digitais para 2024',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
  },
  {
    slug: 'estrategia-conteudo',
    title: 'Estratégia de conteúdo para marcas institucionais',
    summary:
      'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
    content:
      'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.'
  },
  {
    slug: 'bi-metricas',
    title: 'Como BI melhora a tomada de decisão',
    summary:
      'Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam.',
    content:
      'Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.'
  }
];

const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O conteúdo solicitado não foi encontrado.'
    };
  }

  return {
    title: post.title,
    description: post.summary
  };
};

export const generateStaticParams = async () => {
  return blogPosts.map((post) => ({ slug: post.slug }));
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ paddingBlock: (theme) => theme.spacing(6) }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom: (theme) => theme.spacing(3), fontWeight: 700 }}>
        {post.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {post.content}
      </Typography>
    </Container>
  );
}
