import React from "react";

import { useNotification } from "../../components/Notification";

import { Container, Button } from "./styles";

export default function Home() {
  const { createNotification } = useNotification();

  function handleSubmit() {
    const notification = {
      title: "Title",
      description: "Notification description, maybe a little long",
      header: {
        image:
          "https://images.unsplash.com/photo-1549970604-a784b6ecde02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80",
        title: "Hard Rock Café",
        date: "Agora",
      },
    };

    return createNotification(notification);
  }

  return (
    <Container>
      <h1>Hook de notificação</h1>
      <Button type="button" onClick={handleSubmit}>
        Criar notificação
      </Button>
    </Container>
  );
}
