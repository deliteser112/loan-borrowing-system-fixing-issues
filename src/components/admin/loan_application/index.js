import Application from "./applications/applications";
import ApplicationDetails from "./applications/details";
import VerifiedApplication from "./verified_applications/verified_applications";
import Sidebar from "./applications/sidebar";
import Navbar from "./applications/navbar";

export default function App() {
  return (
    <div className="App">
      <VerifiedApplication/>
    </div>
  );
}