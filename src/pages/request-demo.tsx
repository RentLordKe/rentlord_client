import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Center, Container, Divider, Grid, Paper, Stack, TextInput } from '@mantine/core';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';

const RequestDemo: NextPage = () => {
  return (
    <>
      <Head>
        <title>RentLord | Request Demo</title>
        <meta name="description" content="Request Demo RentLord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container mt={170}>
            <Paper p="xl" withBorder>
                <Grid gutter={"xl"}>
                    <Grid.Col md={6}>
                        <Center>
                            <Image 
                                src="/requestdemo.svg"
                                height={400}
                                width={400}
                                alt="request demo illustration"
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Divider label="Fill the form to request for a demo" labelPosition="center" my="lg" />
                        <form>
                            <Stack>
                                <TextInput 
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    withAsterisk
                                />
                                <TextInput 
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    withAsterisk
                                />
                                <TextInput 
                                    label="Email"
                                    placeholder="Enter your email"
                                    withAsterisk
                                />
                                <Button
                                    style={{background: `${colors.secondaryColor}`}}
                                    mt="xl"
                                >
                                    Request Demo
                                </Button>
                            </Stack>
                        </form>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
      </MainLayout>
    </>
  );
}

export default RequestDemo;