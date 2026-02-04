import { Container, Stack, Typography } from '@mui/material';
import ContentSection from '../../../components/ContentSection';

export const metadata = {
  title: 'Implementação',
  description: 'Execução do site institucional com foco em desempenho e consistência.'
};



export default function ImplementacaoPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Implementação
        </Typography>
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
    </Container>
  );
}
