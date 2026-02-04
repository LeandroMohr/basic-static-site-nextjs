import { Container, Stack, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Suporte',
  description: 'Acompanhamento contínuo para manter o site institucional atualizado.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700
}));

export default function SuportePage() {
  return (
    <PageContainer maxWidth="lg">
      <Stack spacing={3}>
        <PageTitle variant="h3" component="h1">
          Suporte
        </PageTitle>
        <ContentSection title="Atualizações mensais">
          Ajustamos conteúdos, banners e comunicados para acompanhar a agenda institucional.
        </ContentSection>
        <ContentSection title="Monitoramento de métricas">
          Acompanhamos acessos, páginas mais lidas e oportunidades de melhoria.
        </ContentSection>
        <ContentSection title="Canal direto">
          Você tem um time dedicado para responder rapidamente a solicitações e dúvidas.
        </ContentSection>
      </Stack>
    </PageContainer>
  );
}
