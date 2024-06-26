import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import ViewEvents from "./pages/ViewEvents.jsx";
import EventDetails from "./pages/EventDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
