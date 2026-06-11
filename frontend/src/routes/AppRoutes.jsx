import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import UploadResume from "../pages/UploadResume/UploadResume";
import AnalyzeJob from "../pages/AnalyzeJob/AnalyzeJob";
import CoverLetter from "../pages/CoverLetter/CoverLetter";
import InterviewPrep from "../pages/InterviewPrep/InterviewPrep";
import InterviewDashboard from "../pages/InterviewDashboard/InterviewDashboard";
import ApplicationTracker from "../pages/ApplicationTracker/ApplicationTracker";
import History from "../pages/History/History";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/analyze" element={<AnalyzeJob />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/dashboard"element={<Dashboard />}/>
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/interview-dashboard" element={<InterviewDashboard />} />
        <Route path="/application-tracker" element={<ApplicationTracker />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;