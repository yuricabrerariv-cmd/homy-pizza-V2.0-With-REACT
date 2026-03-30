import NavBar from "./NavBar";

function Header({ setActiveFlag, setCustomIngredients }) {
  return (
    <header>
      <div className="logotype">
        <h1>Homy Pizza</h1>
      </div>
      <NavBar
        setActiveFlag={setActiveFlag}
        setCustomIngredients={setCustomIngredients}
      />
    </header>
  );
}

export default Header;
