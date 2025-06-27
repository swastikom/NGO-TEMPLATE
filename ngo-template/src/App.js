import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./application/pages/Layout";
import Home from "./application/pages/Home";
// import Blogs from "./application/pages/Blogs";
import Contact from "./application/pages/Contact";
import AboutUs from "./application/pages/WhoWeAre/AboutUs";
import OurTeam from "./application/pages/WhoWeAre/OurTeam";
import OurSupporters from "./application/pages/WhoWeAre/OurSupporters";
import Ourjourney from "./application/pages/WhoWeAre/Ourjourney";
import VisionMission from "./application/pages/WhoWeAre/VisionMission";
import GoverningBody from "./application/pages/WhoWeAre/GoverningBody";
import Education from "./application/pages/OurWork/Education";
import Livelihood from "./application/pages/OurWork/Livelihood";
import Health from "./application/pages/OurWork/Health";
import WomenEmpowerment from "./application/pages/OurWork/WomenEmpowerment";
import Environment from "./application/pages/OurWork/Environment";
import CareAndProtection from "./application/pages/OurWork/CareAndProtection";
import News from "./application/pages/News";
import IndividualSupport from "./application/pages/GetInvolved/IndividualSupport";
import CorporateSupport from "./application/pages/GetInvolved/CorporateSupport";
import Volunteer from "./application/pages/GetInvolved/Volunteer";
import WorkWithUs from "./application/pages/GetInvolved/WorkWithUs";

import NoPage from "./application/pages/NoPage";
import './App.css';
import AnnualReport from "./application/pages/Resources/AnnualReport";
import AuditReport from "./application/pages/Resources/AuditReport";
import MediaCoverage from "./application/pages/Resources/MediaCoverage";
import LegalDocuments from "./application/pages/Resources/LegalDocuments";
import Accredition from "./application/pages/Resources/Accredition";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/News" element={<News />} />
          <Route path="/Ourjourney" element={<Ourjourney />} />
          <Route path="/OurSupporters" element={<OurSupporters />} />
          <Route path="/GoverningBody" element={<GoverningBody />} />
          <Route path="/VisionMission" element={<VisionMission />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/*****************  Our Work Module ********************/}
          <Route path="/education" element={<Education />} />
          <Route path="/livelihood" element={<Livelihood />} />
          <Route path="/health" element={<Health />} />
          <Route path="/womenEmpowerment" element={<WomenEmpowerment />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/careAndProtection" element={<CareAndProtection />} />
          {/*****************  GetInvolved Module ********************/}
          <Route path="/individualSupport" element={<IndividualSupport />} />
          <Route path="/corporateSupport" element={<CorporateSupport />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/workWithUs" element={<WorkWithUs />} />
          {/*****************  Resources Module ********************/}
          <Route path="/annualReport" element={<AnnualReport />} />
          <Route path="/MediaCoverage" element={<MediaCoverage />} />
          <Route path="/auditReport" element={<AuditReport />} />
          <Route path="/legalDocument" element={<LegalDocuments />} />
          <Route path="/accredition" element={<Accredition />} />
         

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);