import { useState } from "react";
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ThreeFlagsSection from './threeFlagsSection.jsx'
import Article from './Content.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  const [activeFlag, setActiveFlag] = useState(null);
  const [customIngredients, setCustomIngredients] = useState([]);

  return (
    <>
      <Header
        setActiveFlag={setActiveFlag}
        setCustomIngredients={setCustomIngredients}
      />
      <Hero />
      <ThreeFlagsSection
        activeFlag={activeFlag}
        setActiveFlag={setActiveFlag}
      />
      <Article
        activeFlag={activeFlag}
        customIngredients={customIngredients}
      />
      <Footer />
    </>
  );
}

export default App;
