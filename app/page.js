"use client";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Container,
  Typography,
  Toolbar,
  Button,
  Grid,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <Head>
        <title>Smart Flash</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Smart Flash
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2"> Welcome to SmartFlash!</Typography>
        <Typography variant="h5">
          {" "}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise flashcards
              perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible anywhere!</Typography>
            <Typography>
              Access your flashcards from any device, at anytime. Study on the
              go!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply input your text and let our software do the rest. Creating
              flashcards has never been easier!
            </Typography>
          </Grid>
        </Grid>

        <Grid spacing={4}></Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">Pricing</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise flashcards
              perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible anywhere!</Typography>
            <Typography>
              Access your flashcards from any device, at anytime. Study on the
              go!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply input your text and let our software do the rest. Creating
              flashcards has never been easier!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
