import { Container, Stack, Typography } from '@mui/material'
import type { TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Consultoria',
  description: 'Diagnóstico e planejamento estratégico para o site institucional.'
};

const PageContainer = styled(Container)(({ theme }) => ({
  paddingBlock: theme.spacing(6)
}));

const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 700
}));

export default function ConsultoriaPage() {
  return (
    <PageContainer maxWidth="lg">
      <Stack spacing={3}>
        <PageTitle variant="h3" component="h1">
          Consultoria
        </PageTitle>
        <ContentSection title="Mapeamento de objetivos">
          Identificamos metas de negócio, públicos prioritários e mensagens-chave para orientar a
          arquitetura do conteúdo institucional.
        </ContentSection>
        <ContentSection title="Auditoria de conteúdo">
          Revisamos páginas existentes, apontamos lacunas e definimos o escopo ideal para a nova
          experiência digital.
        </ContentSection>
        <ContentSection title="Plano de ação">
          Entregamos um cronograma de entregas com indicadores, responsáveis e próximos passos para
          a equipe interna.
        </ContentSection>
      </Stack>
    </PageContainer>
  );
}
