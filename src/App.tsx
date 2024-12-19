import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentProfile from "./pages/StudentProfilePage";
import SyllabusPage from "./pages/SyllabusPage";
import StudyMaterialPage from "./pages/StudyMaterialPage";
import AdmitCardPage from "./pages/AdmitCardPage";
import ResultDownloadPage from "./pages/ResultDownloadPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="student-profile" element={<StudentProfile />} />
          <Route path="syllabus" element={<SyllabusPage />} />
          <Route path="study-material" element={<StudyMaterialPage />} />
          <Route path="admit-card" element={<AdmitCardPage />} />
          <Route path="result" element={<ResultDownloadPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
