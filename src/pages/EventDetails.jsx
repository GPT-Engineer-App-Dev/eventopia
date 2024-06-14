import { useState, useEffect } from "react";
import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find((event) => event.id === parseInt(id));
    setEvent(event);
  }, [id]);

  if (!event) {
    return (
      <Container centerContent>
        <VStack spacing={4} width="100%" maxW="md">
          <Heading as="h2" size="xl">Event Not Found</Heading>
          <Text>The event you are looking for does not exist.</Text>
          <Button colorScheme="teal" onClick={() => navigate("/view-events")}>Back to Events</Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Event Details</Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
          <Heading as="h3" size="md">{event.title}</Heading>
          <Text>{event.description}</Text>
          <Text>{event.date}</Text>
        </Box>
        <Button colorScheme="teal" onClick={() => navigate("/view-events")}>Back to Events</Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;