import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Homepage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
    <PageLayout><Routes>
        <Route path="/insta-clone" element={<HomePage />} />
        <Route path="/:auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes></PageLayout>
      
    </>
  );
}

export default App;
