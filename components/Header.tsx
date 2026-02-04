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
  Typography,
  TypographyProps
} from '@mui/material';
import { styled } from '@mui/material/styles';
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
  { label: 'Visão geral', href: '/servicos' },
  { label: 'Consultoria', href: '/servicos/consultoria' },
  { label: 'Implementação', href: '/servicos/implementacao' },
  { label: 'Suporte', href: '/servicos/suporte' }
];

const DrawerContent = styled(Box)({
  textAlign: 'center'
});

const DrawerTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBlock: theme.spacing(2)
}));

const DrawerListButton = styled(ListItemButton)({
  textAlign: 'center'
});

const HeaderToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const LogoText = styled(Typography)<TypographyProps>(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 700
}));

const DesktopNav = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

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
    <DrawerContent onClick={toggleDrawer}>
      <DrawerTitle variant="h6">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Institucional
        </Link>
      </DrawerTitle>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
              <DrawerListButton>
                <ListItemText primary={item.label} />
              </DrawerListButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <DrawerListButton>
            <ListItemText primary="Serviços" />
          </DrawerListButton>
        </ListItem>
        {submenuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
              <DrawerListButton>
                <ListItemText primary={item.label} />
              </DrawerListButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </DrawerContent>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <HeaderToolbar>
          <LogoText variant="h6" component="div">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Logo Cliente
            </Link>
          </LogoText>
          <DesktopNav>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                <Button color="inherit">
                  {item.label}
                </Button>
              </Link>
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
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem
                    onClick={handleSubmenuClose}
                  >
                    {item.label}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </DesktopNav>
          <MobileMenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </MobileMenuButton>
        </HeaderToolbar>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
