import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <VStack
      as="form"
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify={"center"}
      h="100vh"
      spacing="1rem"
    >
      <Heading>Log In</Heading>
      <FormControl>
        <FormLabel>UserName</FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          size={"lg"}
        />
        <FormErrorMessage>Invalid UserName</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="username"
          placeholder="Enter Password"
          autoComplete="off"
          size={"lg"}
        />
        <FormErrorMessage>Invalid Password</FormErrorMessage>
      </FormControl>
      <ButtonGroup pt={"1rem"}>
        <Button colorScheme={"teal"} type="submit">
          Log In
        </Button>
        <Button>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
