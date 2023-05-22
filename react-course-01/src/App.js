import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import AllMeetupsPage from "./pages/all-meetups";
import FavoritesPage from "./pages/favorites-meetups";
import NewMeetupPage from "./pages/new-meetup";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<AllMeetupsPage />} />
            <Route exact path="/new" element={<NewMeetupPage />} />
            <Route exact path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
