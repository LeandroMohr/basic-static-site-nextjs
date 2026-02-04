'use client';

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Preços', href: '/precos' },
  { label: 'Blog', href: '/blog' }
];

const submenuItems = [
  { label: 'Consultoria', href: '/sobre' },
  { label: 'Implementação', href: '/precos' },
  { label: 'Suporte', href: '/sobre' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuAnchor, setSubmenuAnchor] = useState<null | HTMLElement>(null);

  const isSubmenuOpen = Boolean(submenuAnchor);
  const menuId = useMemo(() => 'submenu-servicos', []);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleSubmenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchor(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchor(null);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Institucional
        </Link>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Serviços" />
          </ListItemButton>
        </ListItem>
        {submenuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Logo Cliente
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" component={Link} href={item.href}>
                {item.label}
              </Button>
            ))}
            <Button
              color="inherit"
              aria-controls={isSubmenuOpen ? menuId : undefined}
              aria-haspopup="true"
              onClick={handleSubmenuOpen}
            >
              Serviços
            </Button>
            <Menu
              id={menuId}
              anchorEl={submenuAnchor}
              open={isSubmenuOpen}
              onClose={handleSubmenuClose}
              MenuListProps={{ onMouseLeave: handleSubmenuClose }}
            >
              {submenuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  href={item.href}
                  onClick={handleSubmenuClose}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
