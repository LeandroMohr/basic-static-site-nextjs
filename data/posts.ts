export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'tendencias-digital-2024',
    title: 'Tendências digitais para 2024',
    summary:
      'Uma visão prática sobre SEO, performance e conteúdo institucional que geram relevância.',
    content:
      'Planeje o conteúdo com base em intenção de busca, organize a arquitetura das páginas e garanta uma experiência consistente em mobile. Combine SEO técnico, performance e acessibilidade para ampliar o alcance orgânico e fortalecer a marca.'
  },
  {
    slug: 'estrategia-conteudo',
    title: 'Estratégia de conteúdo para marcas institucionais',
    summary:
      'Como estruturar narrativas claras que apoiam vendas e posicionamento digital.',
    content:
      'Crie um calendário editorial focado em temas estratégicos, alinhando produto, serviço e prova social. Use linguagem simples, seções objetivas e chamadas de ação para guiar o visitante até a conversão.'
  },
  {
    slug: 'bi-metricas',
    title: 'Como BI melhora a tomada de decisão',
    summary:
      'Dashboards e métricas para transformar visitas em decisões estratégicas.',
    content:
      'Conecte métricas de tráfego, engajamento e conversão em um painel único. Dessa forma, a equipe consegue avaliar campanhas, ajustar a jornada e priorizar conteúdos que geram resultado.'
  }
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
