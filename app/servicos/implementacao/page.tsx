import { Container, Stack, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Implementação',
  description: 'Execução do site institucional com foco em desempenho e consistência.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700
}));

export default function ImplementacaoPage() {
  return (
    <PageContainer maxWidth="lg">
      <Stack spacing={3}>
        <PageTitle variant="h3" component="h1">
          Implementação
        </PageTitle>
        <ContentSection title="Design system aplicado">
          Montamos a interface com componentes reutilizáveis para manter o site alinhado à marca.
        </ContentSection>
        <ContentSection title="Performance e SEO técnico">
          Configuramos rotas estáticas, metadados e otimizações essenciais para páginas rápidas e
          encontráveis.
        </ContentSection>
        <ContentSection title="Entrega guiada">
          Validamos cada etapa com a equipe interna, garantindo consistência e clareza no conteúdo.
        </ContentSection>
      </Stack>
    </PageContainer>
  );
}
