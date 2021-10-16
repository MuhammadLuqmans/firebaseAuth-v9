import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../Context/AuthContext";
import useMounted from "../Hooks/useMounted";

export default function Registerpage() {

  const { register }  = useAuth();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmited, setSubmited] = useState(false);
  const toast = useToast();
  const mounted = useMounted()
  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Register
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // your register logic here
            // console.log(email , password );
            if(!email || !password){ 
              toast({
                description:"Credentials not valid",
                status:"error",
                duration: 5000,
                isClosable: true
              })
            }
           setSubmited(true)  
          
            register(email , password)
            .then(response => console.log(response))
            .catch(error => {console.log(error.message)
            toast({
              description: error.message,
              status:'error',
              duration:5000,
              isClosable: true,
            })
          })
          .finally(()=> setSubmited(false))
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
              value={password}
              onChange={(e) => mounted.current && setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button isLoading={isSubmited} variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<FaGoogle />}
          onClick={() => alert("sign in with google")}
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
