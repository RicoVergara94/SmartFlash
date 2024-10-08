"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  CollectionReference,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/navigation";
import {
  Button,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Grid,
  Card,
  AppBar,
  Toolbar,
} from "@mui/material";

const FlashCards = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getFlashcards = async () => {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    };
    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedIn) return <></>;

  const handleCardClick = (id) => {
    router.push(`./flashcard?id=${id}`);
  };

  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Smart Flash
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black" }}
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 4,
        }}
      >
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardActionArea
                onClick={() => {
                  handleCardClick(flashcard.name);
                }}
              >
                <CardContent>
                  <Typography variant="h6">{flashcard.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashCards;
