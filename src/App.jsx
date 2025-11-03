import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(99,102,241,0.15),transparent)]">
      <Hero />
      <Services />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
