import React from 'react';
import {
  TextInput,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
  Card,
  Center,
  Notification
} from '@mantine/core';
import Image from 'next/image';
import { IconCheck, IconX } from '@tabler/icons';

import { useStyles } from './forgotPassword.styles';

const ForgotPassword = (props: PaperProps) => {
  const { classes } = useStyles();

  return (
    <Card  p="lg" radius="md" withBorder className={classes.wrapper} mt={170}> 
        <Card.Section>
            <Center>
                <Image
                    src="/forgotpassword.svg"
                    height={360}
                    width={360}
                    alt="Forgot password svg"
                />
            </Center>
        </Card.Section>
        {/* {response === 'success' ? (
            <Notification icon={<IconCheck size={18} />} color="teal" title="Password Reset Link" onClose={clearResponse} my="lg">
              Check email to reset password
            </Notification>
          ): response ? (
            <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} my="lg">
              {response}
            </Notification>
          ): ''
        } */}
        <form>
            <Stack>

            <TextInput
                required
                label="Enter your Email"
                placeholder="hello@gmail.com"
                // value={form.values.email}
                // onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                // error={form.errors.email && 'Invalid email'}
            />

            <Anchor
                href='/auth/sign-in'
                color="dimmed"
                size="xs"
            >        
                Have you remembered your password? Login
            </Anchor>
            <Button type="submit" className={classes.button}>Submit</Button>
            </Stack>
        </form>
    </Card>
    
  )
}

export default ForgotPassword;