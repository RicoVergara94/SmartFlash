"use client";
import getStripe from "@/utils/get-stripe";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Container,
  Typography,
  Toolbar,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import { POST } from "./api/generate/route";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (chosenAmount) => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify({ amount: chosenAmount }),
    });

    const checkoutSessionJson = await checkoutSession.json();
    if (checkoutSession.status === 500) {
      console.error(checkoutSession.message);
      return;
    }
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });
    if (error) {
      console.warn(error.message);
    }
  };

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
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "10px 20px",
            }}
          >
            <SignedOut>
              <Button color="inherit" href="/sign-in">
                Login
              </Button>
              <Button color="inherit" href="/sign-up">
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                variant="contained"
                sx={{ backgroundColor: "black", mr: 4 }}
                onClick={() => {
                  router.push("/flashcards");
                }}
              >
                My Flashcards
              </Button>
              <UserButton></UserButton>
            </SignedIn>
          </Box>
          <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
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
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => {
            if (user) {
              router.push("/generate");
            } else {
              alert("please sign in to generate flashcards.");
            }
          }}
        >
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
        <Typography variant="h3" sx={{ m: 4 }}>
          Pricing
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month
              </Typography>
              <Typography>
                Access to basic flascard features and limited storage
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => {
                  handleSubmit(5);
                }}
              >
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography>
                Unlimited flashcards and storage, with priority support
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => {
                  handleSubmit(10);
                }}
              >
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
