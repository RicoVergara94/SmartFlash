import { SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";
const {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} = require("@mui/material");

const SignUpPage = () => {
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
              Sign up
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
        <Typography variant="h4">Sign up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
};

export default SignUpPage;
