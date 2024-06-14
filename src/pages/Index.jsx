import { Container, VStack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Events Management App</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Flex direction="row" justifyContent="center" alignItems="center" gap={4}>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg" onClick={() => navigate("/create-event")}>
            Create Event
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" size="lg" onClick={() => navigate("/view-events")}>
            View Events
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;