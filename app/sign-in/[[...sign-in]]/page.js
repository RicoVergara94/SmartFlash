import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
const {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} = require("@mui/material");

const SignInPage = () => {
  return (
    <Container maxwidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Smart Flash
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Sign in </Typography>
        <SignIn />
      </Box>
    </Container>
  );
};

export default SignInPage;
