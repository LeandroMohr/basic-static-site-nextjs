import { Container, Stack, Typography } from '@mui/material';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Consultoria',
  description: 'Diagnóstico e planejamento estratégico para o site institucional.'
};



export default function ConsultoriaPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Consultoria
        </Typography>
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
    </Container>
  );
}
