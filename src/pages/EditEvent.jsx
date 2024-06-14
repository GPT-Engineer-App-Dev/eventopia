import { useState, useEffect } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find((event) => event.id === parseInt(id));
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setDate(event.date);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = events.map((event) =>
      event.id === parseInt(id) ? { ...event, title, description, date } : event
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    navigate("/view-events");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Edit Event</Heading>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>Update Event</Button>
      </VStack>
    </Container>
  );
};

export default EditEvent;