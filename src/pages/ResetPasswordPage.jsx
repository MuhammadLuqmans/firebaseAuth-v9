import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  
  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Reset password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // handle reset password
            // if(!email){
            //   toast({
            //     description: "Please put the Email",
            //     status: "error",
            //     isClosable:true,
            //     duration: 5000,
            //   })
            // }
            // isSubmitting(true)
          }}>
          <Stack spacing="6">
            <FormControl id="password">
              <FormLabel>New password</FormLabel>
              <Input
                
                type="password"
                autoComplete="password"
                required
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="primary"
              size="lg"
              fontSize="md"
            >
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  );
}
