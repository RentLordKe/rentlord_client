import React, { ReactNode, useState } from 'react';
import {
  Anchor,
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStyles } from './mainLayout.styles';
import logo from '../../assets/logo.png';
import { colors } from '../../constants/colors';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {

  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const router = useRouter();
  const { width } = useViewportSize();

  return (
    <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        header = {
        <Header height="120px" className={`${classes.headerBackground}`} withBorder>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <div  className={classes.burger}>
              <Anchor href="/">
                <Image 
                    src={logo}
                    width={300}
                    height={160}
                    alt='logo'
                />
              </Anchor>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={`${colors.primaryColor}`}
                mr="xl"        
              />
            </div>
          </MediaQuery>
          <div className={classes.header}>
            <div className={classes.logo}>
              <Anchor href="/" className={classes.navitem}>
                <Image 
                  src={logo}
                  width={320}
                  height={180}
                  alt='logo'
                />
               
              </Anchor>
            </div>
            <div className={classes.links}>
              <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : "" }`} href="/about">About</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/find-a-home" ? classes.active : "" }`} href="/find-a-home">Find a home</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : "" }`} href="/faq">FAQ</Anchor>
            </div>
            <div className={classes.links}>
              <Anchor target="_blank" className={`${classes.navitem} ${classes.requestdemo} ${router.pathname === "/request-demo" ? classes.activeRequestdemo : "" }`} href="https://docs.google.com/forms/d/e/1FAIpQLSdcoozgK80RlQc8AuO4vzq1NlgnSQv203wtThsrQqtvNMYAQA/viewform?usp=sf_link" >Request Demo</Anchor>
              <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : "" }`} href="/auth/sign-in">Sign In</Anchor>
            </div>
          </div>
        </Header>}

        navbar = {<Navbar
          className={classes.navbar}
          width={{ base: "100%", sm: 0 }}
          hidden={!opened}
        >
            <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
            <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : "" }`} href="/about">About</Anchor>
            <Anchor className={`${classes.navitem} ${router.pathname === "/find-a-home" ? classes.active : "" }`} href="/find-a-home">Find a home</Anchor>
            <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : "" }`} href="/faq">FAQ</Anchor>
            <Anchor target="_blank" className={`${classes.navitem} ${classes.requestdemo} ${router.pathname === "/request-demo" ? classes.activeRequestdemo : "" }`} href="/https://docs.google.com/forms/d/e/1FAIpQLSdcoozgK80RlQc8AuO4vzq1NlgnSQv203wtThsrQqtvNMYAQA/viewform?usp=sf_link" >Request Demo</Anchor>
            <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : "" }`} href="/auth/sign-in">Sign In</Anchor>
        </Navbar>}
    >
        {children}
    </AppShell>
  );
}

export default MainLayout;
