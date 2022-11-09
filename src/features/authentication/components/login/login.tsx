import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
  Grid,
  Notification
} from '@mantine/core';
import { IconX } from '@tabler/icons';
import { useStyles } from './login.styles';
import Image from 'next/image';

import { GoogleButton, TwitterButton } from '../../../../components/socialButtons/socialButtons';

const Login = (props: PaperProps) => {
  const { classes } = useStyles();
  const router = useRouter()
 
  useEffect(() => {
    //logout();
  }, []);

  // if (response === "success") {
  //   switch (userMeData?.role) {
  //     case 'student':
  //       router.push('/courses').then(() => router.reload());
  //       break;
  //     case 'admin':
  //       router.push('/admin').then(() => router.reload());
  //       break;
  //     case 'tutor':
  //       router.push('/tutor/uploads').then(() => router.reload());
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper} mt={170}>
      <Grid gutter={70}>
        <Grid.Col md={6}>
          <Image 
            src="/login.svg"
            height={400}
            width={400}
            alt="login svg"
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Text size="lg" weight={500} style={{marginTop:15}}>
            Login with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider label="or continue with email" labelPosition="center" my="lg" />

          {/* {response === "success" ? "" : response ? (
            <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse}>
            {response}
          </Notification>
          ): ""}   */}

          <form>
            <Stack>
              
              <TextInput
                required
                label="Email"
                placeholder="hello@gmail.com"
                // value={form.values.email}
                // onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                // error={form.errors.email && 'Invalid email'}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                // value={form.values.password}
                // onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                // error={form.errors.password && 'Password should include at least 6 characters'}
              />

              <Anchor
                href='forgot-password'
                color="dimmed"
                size="xs"
              >
                Forgot Password?
              </Anchor>
              <Button type="submit" className={classes.button} >Login</Button>
            

            </Stack>
            
          </form>
        </Grid.Col>
      </Grid>
    
    </Paper>
  )
}

export default Login