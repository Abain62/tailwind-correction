import "./App.css";
import Logements from "./Logements";
import Header from "./Header";
import Avis from "./Avis";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Logements />
      <Avis />
      <Footer />
    </div>
  );
}

export default App;
