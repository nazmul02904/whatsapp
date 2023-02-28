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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const { getFieldProps, handleSubmit, resetForm, errors, touched } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username Too short")
          .max(28, "Username too long"),
        password: Yup.string()
          .required("Password Required")
          .min(6, "Pasword too short!")
          .max(28, "Password too long!"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values));
        resetForm();
      },
    }
  );
  return (
    <VStack
      as="form"
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify={"center"}
      h="100vh"
      spacing="1rem"
      onSubmit={handleSubmit}
    >
      <Heading>Log In</Heading>
      <FormControl isInvalid={errors.username && touched.username}>
        <FormLabel>UserName</FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          size={"lg"}
          {...getFieldProps("username")}
        />
        <FormErrorMessage>{errors.username}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password && touched.password}>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          placeholder="Enter Password"
          autoComplete="off"
          size={"lg"}
          type="password"
          {...getFieldProps("password")}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>
      <ButtonGroup pt={"1rem"}>
        <Button colorScheme={"teal"} type="submit">
          Log In
        </Button>
        <Button onClick={() => navigate("/register")}>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
