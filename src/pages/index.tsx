import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Anchor, BackgroundImage, Box, Button, Card, Center, Container, createStyles, Footer, Grid, Group, Space, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';
import map from '../assets/map.png';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { useViewportSize } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  cardWidth: {
    maxWidth: 300
  },

  demoButton: {
    backgroundColor: `${colors.secondaryColor}`,
    border: `2px solid ${colors.secondaryColor}`,
    borderRadius: "10px",
    display: "inline-block",
    padding: "5px 12px",
    textAlign: "center",
    color:  theme.colors.gray[0],
    fontWeight: 'bold',
    margin: '30px 0',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,0.2)',
    '&:hover': {
       opacity: 0.7,
       textDecoration: 'none'
        
    }
  },

  heading: {
    fontSize: '35px',
    fontWeight: 500,
  },

  headingTwo: {
    fontSize: '30px',
    fontWeight: 500
  },

  primaryBackground: {
    background: `${colors.primaryColor}`,
    margin:0,
    padding:0,
    width: "105%"
  },

  primaryText : {
    color : `${colors.primaryColor}`
  },

  secondaryText: {
    color: `${colors.secondaryColor}`
  },

  secondaryUnderline: {
    textDecoration: `underline dotted ${colors.secondaryColor} 2px`,
  },

  whiteText: {
    color: theme.colors.gray[0]
  }
 
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const { width } = useViewportSize();
  return (
    <>
      <Head>
        <title>RentLord</title>
        <meta name="description" content="RentLord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
          <Container mt={170}>
            <Grid gutter={40}>
              <Grid.Col md={6}>
                <Text className={classes.heading}>The "<span className={classes.primaryText}><span className={classes.secondaryText}>P</span>roperty <span className={classes.secondaryText}>M</span>anagement <span className={classes.secondaryText}>S</span>oftware</span>" you have always been looking for !!</Text>
                <Text mt="md">Rental management can be a very tedious task from record keeping to sorting out your tenant’s data. At rentlord we are handing over the powers of automation right from automated rent collections, accounting & reconciliation, SMS notifications, tenants shifting, deposit managements among other features. <br />
                The solution is packed in a web & mobile based platform to ease the entire management process at the comfort of your seat from anywhere in the world with zero paper work. Oh! If you need paper work you just print out every data at our accounting/data analysis section on the platform well-tailored to filter and get any form of data in relation to your rentals.  </Text>
                <Text mt="md">Don't wait, start using RentLord Today</Text>
                <Anchor href='https://docs.google.com/forms/d/e/1FAIpQLSdcoozgK80RlQc8AuO4vzq1NlgnSQv203wtThsrQqtvNMYAQA/viewform?usp=sf_link' target="_blank" className={classes.demoButton}>Request Demo</Anchor>
              </Grid.Col>
              <Grid.Col md={6}>
                <Center>
                  <Image 
                    src="/hero.svg"
                    height={width >= 768 ? 550 : 420}
                    width={width >= 768 ? 500 : 310}
                    alt="hero image"
                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Container>
          <BackgroundImage
            src={width >= 768 ? "/primarywave.svg" : ""}
            radius="md"
            component="div" 
            className={width <=768 ? `${classes.primaryBackground}` : ""}
          >
            <Container  className={classes.whiteText} >
              <Center>
                <Text className={`${classes.heading} ${classes.secondaryText}`} mt={width >= 768 ? 140 : 50}>WHY RENTLORD?</Text>
              </Center>
              <Text my="xl">
              It offers a seamless accounting system for your property without the cumbersome follow up of paper trail. It also eases up on the inspection and on-time maintenance of Tennant queries – so tenants issues are attended to with haste. 
              Full control of management any time and from anywhere, it will also give data on vacant houses, which ones are paid and which ones are not, provide SMS alerts as well as a comprehensive accounting report
              </Text>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={5}>
                 <Center>
                    <Image
                      src="/manageproperty.svg"
                      height={300}
                      width={300}
                      alt="Manage Property"
                    />
                 </Center>
                </Grid.Col>
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Manage Property</Text>
                  <Text>There is nothing like a slow operation day in property management and with the things you have to do each day it could make your management life less stressful and enjoyable with a dedicated management system, take charge and flow with the digital ways of management. Take Control!</Text>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Automated Payments</Text>
                  <Text>Payment can be done through various payments platforms from MPESA, KCB and Equity bank. All payments made are automated and can allow the owner to filter payments made and those that are not made and what arrears are pending. 
                  Every payment is accompanied with a receipt message to acknowledge rent receipt for the said month so that each client can also have data/feedback all along during his/time at the apartment</Text>
                </Grid.Col>
                <Grid.Col md={5}>
                 <Center>
                    <Image
                      src="/makepayment.svg"
                      height={300}
                      width={300}
                      alt="Automated payments"
                    />
                 </Center>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={5}>
                 <Center>
                    <Image
                      src="/sms.svg"
                      height={250}
                      width={250}
                      alt="sms reminders"
                    />
                 </Center>
                </Grid.Col>
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Automated SMS Reminders</Text>
                  <Text>The feature enables you or your management team to make bulk and customized messages to your tenants, right from rent payment reminders, any news such as – water outage, power, rental increments, garbage collections and much more – Ease communications with just a press of a single button.</Text>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Maintenance and Operations</Text>
                  <Text>With easy access to our platform the tenant can directly request for maintenance through the app, this will in turn allow the management team to attend to the requests and supervise that the maintenance is done on time. 
                The property owner can now keep trial of all the maintenance done as well as the expenses on each for better record keeping and accounting.</Text>
                </Grid.Col>
                <Grid.Col md={5}>
                 <Center>
                    <Image
                      src="/maintenance.svg"
                      height={250}
                      width={250}
                      alt="Maintenance"
                    />
                 </Center>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" mt="xl" pb={45}>
                <Grid.Col md={5} mt="lg">
                 <Center>
                    <Image
                      src="/rentalapp.svg"
                      height={250}
                      width={250}
                      alt="Reports"
                    />
                 </Center>
                </Grid.Col>
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Rental Application</Text>
                  <Text>We provide an additional app for your tenants where they can make quick and formal requests to your management team, right from vacation requests – pending the allowed person to approve, shifting to other one of your apartments, maintenance and repair as well other relevant communications that would be deemed necessary from the management side.</Text>
                </Grid.Col>
              </Grid>
            </Container>
          </BackgroundImage>
          <Container>
            <Center>
              <Text className={`${classes.heading} ${classes.secondaryText} ${classes.secondaryUnderline}`} mt={50}>Get In Touch</Text>
            </Center>
            <Grid gutter={100}>
              <Grid.Col md={6}>
                <form>
                  <Stack>
                  <Text className={classes.primaryText}>Leave us a message</Text>
                    <TextInput 
                      placeholder="Your name"
                      label="Full name"
                      withAsterisk
                    />
                    <TextInput 
                      placeholder="Your email"
                      label="Email address"
                      withAsterisk
                    />
                    <Textarea 
                      placeholder="Your message"
                      label="Message"
                      withAsterisk
                    />
                    <Button
                      style={{background: `${colors.secondaryColor}`}}
                    >
                      Send
                    </Button>
                  </Stack>
                </form>
              </Grid.Col>
              <Grid.Col md={6} mt="xl">
                <Stack>
                  <Group>
                    <IconMapPin color={`${colors.secondaryColor}`} size={19} />
                    <Text>Bishop Magua Centre,<br />Ngong Road, Nairobi, Kenya.</Text>
                  </Group>
                  <Group>
                    <IconPhone color={`${colors.secondaryColor}`} size={19} />
                    <Text>+254703519593</Text>
                  </Group>
                  <Group>
                    <IconMail color={`${colors.secondaryColor}`} size={19} />
                    <Text>info@rentlord.rentals</Text>
                  </Group>
                  <Image 
                    src={map}
                    height={180}
                    width={300}
                    alt="map"
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
          <FooterLinks data={footerData}/>
      </MainLayout>
    </>
  )
}

export default Home