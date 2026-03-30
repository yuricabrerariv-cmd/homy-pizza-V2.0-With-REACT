import { useState } from "react";
import usaFlag from "./assets/Icons/Icon-Flag_of_the_United_States.svg";
import CustomPizzaModal from "./Modal";

function NavBar({ setActiveFlag, setCustomIngredients }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav>
        <a href="#threeFlags" onClick={() => setActiveFlag("italy")}>
          <h2>Italian Pizza</h2>
        </a>

        <a href="#threeFlags" onClick={() => setActiveFlag("usa")}>
          <h2>American Pizza</h2>
        </a>

        <a href="#threeFlags" onClick={() => setActiveFlag("cuba")}>
          <h2>Cuban Pizza</h2>
        </a>

        <button
          className="btn-openCPizzaModal"
          onClick={toggleModal}
        >
          Your Pizza
        </button>

        <div className="Language-selection">
          <h2>EN</h2>
          <div className="language-flags">
            <img src={usaFlag} alt="USA flag icon" />
          </div>
        </div>
      </nav>

      {modal && (
        <CustomPizzaModal
          onClose={() => setModal(false)}
          onApply={(ingredients) => {
            setCustomIngredients(ingredients);
            setActiveFlag("custom");
            setModal(false);
          }}
        />
      )}

    </>
  );
}

export default NavBar;
