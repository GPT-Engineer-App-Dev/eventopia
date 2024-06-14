import { useState, useEffect } from "react";
import { Container, VStack, Heading, Box, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(events);
  }, []);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">View Events</Heading>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map((event) => (
            <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Heading as="h3" size="md">{event.title}</Heading>
              <Text>{event.description}</Text>
              <Text>{event.date}</Text>
              <Flex mt={2} justifyContent="space-between">
                <Button colorScheme="blue" onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</Button>
                <Button colorScheme="red" onClick={() => handleDelete(event.id)}>Delete</Button>
              </Flex>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default ViewEvents;