import { Box, Container, IconButton, Stack, Typography, TypographyProps } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <LinkedInIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: <InstagramIcon /> },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: <YouTubeIcon /> },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: <FacebookIcon /> },
  { label: 'TikTok', href: 'https://www.tiktok.com', icon: <MusicNoteIcon /> }
];

const sitemapLinks = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Consultoria', href: '/servicos/consultoria' },
  { label: 'Implementação', href: '/servicos/implementacao' },
  { label: 'Suporte', href: '/servicos/suporte' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Preços', href: '/precos' },
  { label: 'Blog', href: '/blog' }
];

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  marginTop: theme.spacing(8),
  paddingBlock: theme.spacing(4)
}));

const FooterLink = styled(Typography)<TypographyProps>({
  textDecoration: 'none'
});

const FooterBottom = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(3)
}));

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2">Email: contato@empresa.com</Typography>
            <Typography variant="body2">Telefone: (11) 99999-9999</Typography>
            <Typography variant="body2">Endereço: Rua Exemplo, 123 - São Paulo</Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Mapa do site
            </Typography>
            <Stack spacing={0.5}>
              {sitemapLinks.map((link) => (
                <FooterLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  color="text.secondary"
                >
                  {link.label}
                </FooterLink>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Redes sociais
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  aria-label={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Stack>
        <FooterBottom variant="body2" color="text.secondary">
          © 2024 Empresa Institucional. Todos os direitos reservados.
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}
