import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Badge, Button, Card, Center, Container, createStyles, Divider, Grid, Group, Paper, Stack, Text, TextInput } from '@mantine/core';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';
import { IconSearch } from '@tabler/icons';
import houseImage from '../assets/house1.png';
import houseImage1 from '../assets/house2.png';
import houseImage2 from '../assets/house3.png';

const useStyles = createStyles((theme) => ({
    cardWidth: {
        minWidth: 300,
        maxWidth: 350
    },
    searchWidth: {
      maxWidth: 500,
      width: "90%"
    },
}));
  

const FindAHome: NextPage = () => {
    const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>RentLord | Find a Home</title>
        <meta name="description" content="Request Demo RentLord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container mt={170}>
            <Center>
                <form className={classes.searchWidth}>
                    <TextInput 
                        placeholder='Search...'
                        rightSection={<Button style={{background: `${colors.primaryColor}`}}><IconSearch /></Button>}
                    />
                </form>
            </Center>
            <Grid mt={40}>
                <Grid.Col md={4}>
                    <Card
                        p="xl"
                        shadow="sm"
                        withBorder
                        component="a"
                        href="#"
                        className={classes.cardWidth}
                    >
                        <Card.Section>
                            <Image
                                src={houseImage}
                                height={180}
                                width={300}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Burj Saga Apartments</Text>
                            <Badge color="orange" variant="light">
                            21,000
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor tortor, porta in varius in, facilisis in dui. Phasellus euismod pretium mollis. Donec quis mi eget dui venenatis venenatis at quis erat.
                        </Text>
                        
                    </Card>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Card
                        p="xl"
                        shadow="sm"
                        withBorder
                        component="a"
                        href="#"
                        className={classes.cardWidth}
                    >
                        <Card.Section>
                            <Image
                                src={houseImage1}
                                height={180}
                                width={300}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Tamall Apartments</Text>
                            <Badge color="orange" variant="light">
                            42,000
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor tortor, porta in varius in, facilisis in dui. Phasellus euismod pretium mollis. Donec quis mi eget dui venenatis venenatis at quis erat.
                        </Text>
                        
                    </Card>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Card
                        p="xl"
                        shadow="sm"
                        withBorder
                        component="a"
                        href="#"
                        className={classes.cardWidth}
                    >
                        <Card.Section>
                            <Image
                                src={houseImage2}
                                height={180}
                                width={300}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Laduvet Apartments</Text>
                            <Badge color="orange" variant="light">
                            69,000
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor tortor, porta in varius in, facilisis in dui. Phasellus euismod pretium mollis. Donec quis mi eget dui venenatis venenatis at quis erat.
                        </Text>
                        
                    </Card>
                </Grid.Col>
            </Grid>
            
        </Container>
      </MainLayout>
    </>
  );
}

export default FindAHome;