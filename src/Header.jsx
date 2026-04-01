import NavBar from "./NavBar";

function Header({
                  setActiveFlag,
                  setCustomIngredients,
                  selectedIngredients,
                  setSelectedIngredients,
                }) {
  return (
    <header>
      <div className="logotype">
        <h1>Homy Pizza</h1>
      </div>
      <NavBar
        setActiveFlag={setActiveFlag}
        setCustomIngredients={setCustomIngredients}
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      />
    </header>
  );
}


export default Header;
