import { Container, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blogPosts, getPostBySlug } from '../../../data/posts';
import { notFound } from 'next/navigation';

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

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700
}));

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageContainer maxWidth="md">
      <PageTitle variant="h3" component="h1">
        {post.title}
      </PageTitle>
      <Typography variant="body1" color="text.secondary">
        {post.content}
      </Typography>
    </PageContainer>
  );
}
