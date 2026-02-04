import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <LinkedInIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: <InstagramIcon /> },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: <YouTubeIcon /> },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: <FacebookIcon /> },
  { label: 'TikTok', href: 'https://www.tiktok.com', icon: <MusicNoteIcon /> }
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', mt: 8, py: 4 }}>
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
        <Typography variant="body2" sx={{ mt: 3 }} color="text.secondary">
          © 2024 Empresa Institucional. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
