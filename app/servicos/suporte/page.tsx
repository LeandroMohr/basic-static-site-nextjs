import { Container, Stack, Typography } from '@mui/material';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Suporte',
  description: 'Acompanhamento contínuo para manter o site institucional atualizado.'
};



export default function SuportePage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Suporte
        </Typography>
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
    </Container>
  );
}
