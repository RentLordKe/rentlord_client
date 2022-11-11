import { Box, Center, Container, Grid, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>RentLord | About Us</title>
        <meta name="description" content="About RentLord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container  mt={170}>
            <Text size={35} weight={550} style={{marginTop:20, color:`${colors.primaryColor}`}}>About Us</Text>
            <Text>
                <span style={{ fontWeight: 500}}>Rentlord</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nisi nisl. Duis aliquam pulvinar orci, vitae faucibus nulla ullamcorper blandit. Proin sed felis vulputate, mattis ligula sed, facilisis est. Quisque varius lacus ut eleifend molestie. Proin in imperdiet eros, quis eleifend urna. Aliquam pellentesque velit mauris, non condimentum nulla euismod in. Ut at varius dolor, a consequat quam. Aenean enim risus, gravida vitae mi ac, scelerisque faucibus mi. 
            </Text>
            <Text>
                Phasellus aliquam enim tortor, ac sagittis dui cursus sit amet. Nunc erat sapien, venenatis vitae volutpat eu, pellentesque nec sapien.
            </Text>
            <Text>
                Phasellus aliquam enim tortor, ac sagittis dui cursus sit amet. Nunc erat sapien, venenatis vitae volutpat eu, pellentesque nec sapien.
            </Text>
            <Grid my="xl">
                <Grid.Col md={6}>
                    <Center>
                        <Image 
                            src="/mission.svg"
                            height={300}
                            width={350}
                            alt="mission image"
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text size={32} weight={550} style={{marginTop:20, color:`${colors.primaryColor}`}}>
                       Our Mission
                    </Text>
                    <Text>
                    Our Mission is to Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla cursus ligula a tempor vehicula. Nunc eget nibh hendrerit, ultricies orci quis, consectetur augue.  Fusce id quam a eros volutpat rutrum. Duis tincidunt libero quis arcu elementum, ut mattis urna dictum. Aenean sit amet mi at orci pharetra molestie. Praesent tempus tristique blandit. Sed mattis diam eu aliquam gravida. Quisque sem quam
                    </Text>

                </Grid.Col>
            </Grid>
            <Grid my="xl">
                <Grid.Col md={6}>
                    <Text size={32} weight={550} style={{marginTop:20, color:`${colors.primaryColor}`}}>
                       Our Vision
                    </Text>
                    <Text>
                        Our vision is to be the Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla cursus ligula a tempor vehicula. Nunc eget nibh hendrerit, ultricies orci quis, consectetur augue.  Fusce id quam a eros volutpat rutrum. Duis tincidunt libero quis arcu elementum, ut mattis urna dictum. Aenean sit amet mi at orci pharetra molestie. Praesent tempus tristique blandit. Sed mattis diam eu aliquam gravida. Quisque sem quam
                    </Text>
                    <Text weight={650} mt="lg">
                        Manage your Property at the tap of a button
                    </Text>

                </Grid.Col>
                <Grid.Col md={6}>
                    <Center>
                        <Image 
                            src="/vision.svg"
                            height={350}
                            width={430}
                            alt="vision image"
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
        <Box>
            <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  );
}

export default About;