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
  return (
    <>
      <Head>
        <title>RentLord</title>
        <meta name="description" content="RentLord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Box component='div' style={{background: 'white'}}>
          <Container mt={170}>
            <Grid gutter={40}>
              <Grid.Col md={6}>
                <Text className={classes.heading}>The "<span className={classes.primaryText}><span className={classes.secondaryText}>P</span>roperty <span className={classes.secondaryText}>M</span>anagement <span className={classes.secondaryText}>S</span>oftware</span>" you have always been looking for !!</Text>
                <Text mt="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor tortor, porta in varius in, facilisis in dui. Phasellus euismod pretium mollis. Donec quis mi eget dui venenatis venenatis at quis erat. Nunc eget lobortis dolor, in porttitor lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam facilisis felis non sem consequat luctus. Curabitur hendrerit eros non leo porta tempus. </Text>
                <Text mt="md">Don't wait, start using RentLord Today</Text>
                <Anchor href='/courses' className={classes.demoButton}>Request Demo</Anchor>
              </Grid.Col>
              <Grid.Col md={6}>
                <Center>
                  <Image 
                    src="/hero.svg"
                    height={550}
                    width={500}
                    alt="hero image"
                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
        <Box component='div'>
          <BackgroundImage
            src="/primarywave.svg"
            radius="md"
            component="div"
            style={{width: "100%"}}
          >
            <Container  className={classes.whiteText} >
              <Center>
                <Text className={`${classes.heading} ${classes.secondaryText}`} mt={140}>WHY RENTLORD?</Text>
              </Center>
              <Text my="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus. Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non, tempus a enim. Mauris cursus, risus eleifend auctor pharetra, est mauris luctus massa, at ullamcorper eros lorem vel nunc. Aenean et ornare risus. Vivamus eleifend odio quam, sed sagittis risus faucibus eu. Aliquam aliquam et ex in eleifend. Morbi ac leo sit amet dolor laoreet aliquam quis eget ligula.
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
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non.</Text>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Automated Payments</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non.</Text>
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
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non.</Text>
                </Grid.Col>
              </Grid>
              <Grid gutter="xl" my="xl">
                <Grid.Col md={7}>
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Maintenance and Operations</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non.</Text>
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
                  <Text className={`${classes.headingTwo} ${classes.secondaryText}`} mt={40}>Rent Reconciliation & Reports</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque ac mollis dictum. Vivamus euismod sed lacus hendrerit elementum. Mauris rhoncus urna et augue aliquet, suscipit tincidunt arcu placerat. Aenean magna neque, finibus ac velit nec, mollis egestas purus Integer ornare felis eget sem eleifend, in ultrices metus sollicitudin. Cras ultricies sapien in est egestas, eleifend iaculis est porta. Praesent libero ligula, faucibus nec placerat non.</Text>
                </Grid.Col>
              </Grid>
            </Container>
          </BackgroundImage>
        </Box>
        <Box component='div'>
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
        </Box>
        <Box>
          <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  )
}

export default Home