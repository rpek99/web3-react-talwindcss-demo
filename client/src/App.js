import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
       </div>
       <Transactions />
       <Footer />
    </div>
  );
}

export default App;
