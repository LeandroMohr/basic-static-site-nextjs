import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  
  // Use a stable date that represents when the site structure was last updated
  // This should be manually updated when content changes significantly
  const lastModified = new Date('2024-01-01');
  
  const routes = [
    '',
    '/sobre',
    '/precos',
    '/blog',
    '/servicos',
    '/servicos/consultoria',
    '/servicos/implementacao',
    '/servicos/suporte',
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add blog posts
  const blogPosts = [
    'tendencias-digital-2024',
    'estrategia-conteudo',
    'bi-metricas',
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
