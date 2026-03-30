import { useState } from 'react';
import AddRemoveButton from './add-remove-btn';

function CustomPizzaModal({ onClose, onApply }) {
  const [activeTab, setActiveTab] = useState("sh");

  
  
  const [selectedIngredients, setSelectedIngredients] = useState({
      salamy: false,
      pepperony: false,
      serranoHam: false,
      prosciuttoHam: false,
      bellPeppers: false,
      spinach: false,
      onion: false,
      mushrooms: false,
      manchego: false,
      mozzarella: false,
      cheddar: false,
      parmesan: false,
    });
    
    const selectedIngredientNames = Object.entries(selectedIngredients)
    .filter(([, isSelected]) => isSelected)
    .map(([name]) => {
        const labels = {
        salamy: "Salamy",
        pepperony: "Pepperony",
        serranoHam: "Serrano Ham",
        prosciuttoHam: "Prosciutto Ham",
        bellPeppers: "Bell Peppers",
        spinach: "Spinach",
        onion: "Onion",
        mushrooms: "Mushrooms",
        manchego: "Manchego",
        mozzarella: "Mozzarella",
        cheddar: "Cheddar",
        parmesan: "Parmesan",
        };
  
        return labels[name];
    });
    
    const toggleIngredient = (name) => {
        setSelectedIngredients((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };
    
  const resetSelection = () => {
    setSelectedIngredients({
      salamy: false,
      pepperony: false,
      serranoHam: false,
      prosciuttoHam: false,
      bellPeppers: false,
      spinach: false,
      onion: false,
      mushrooms: false,
      manchego: false,
      mozzarella: false,
      cheddar: false,
      parmesan: false,
    });
  };

  return (
    <div className="modal">
      <div className="modal-frame">
        <div className="modal-content">
          <h5 className="modalTitle">Custom Your Pizza</h5>

          <div className="modalIngredients">
            <div className="tabs">
              <button
                type="button"
                className={`sh-Tab1 ${activeTab === "sh" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("sh")}
              >
                <h2 className="tab1Title">Sausage & Ham</h2>
              </button>

              <button
                type="button"
                className={`sh-Tab2 ${activeTab === "v" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("v")}
              >
                <h2 className="tab2Title">Veggie</h2>
              </button>

              <button
                type="button"
                className={`sh-Tab3 ${activeTab === "ch" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("ch")}
              >
                <h2 className="tab3Title">Cheese</h2>
              </button>
            </div>

            {activeTab === "sh" && (
              <div className="sh-Square">
                <h3 className="sentence">
                  Add or remove sausage or ham to your customized pizza
                </h3>

                <div className="sh-ingredients">
                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Salamy</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.salamy}
                      onToggle={() => toggleIngredient("salamy")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Pepperony</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.pepperony}
                      onToggle={() => toggleIngredient("pepperony")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Serrano Ham</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.serranoHam}
                      onToggle={() => toggleIngredient("serranoHam")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Prosciutto Ham</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.prosciuttoHam}
                      onToggle={() => toggleIngredient("prosciuttoHam")}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "v" && (
              <div className="v-Square">
                <h3 className="sentence">
                  Add or remove vegetables to your customized pizza
                </h3>

                <div className="sh-ingredients">
                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Bell Peppers</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.bellPeppers}
                      onToggle={() => toggleIngredient("bellPeppers")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Spinach</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.spinach}
                      onToggle={() => toggleIngredient("spinach")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Onion</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.onion}
                      onToggle={() => toggleIngredient("onion")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Mushrooms</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.mushrooms}
                      onToggle={() => toggleIngredient("mushrooms")}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ch" && (
              <div className="ch-Square">
                <h3 className="sentence">
                  Add or remove one or more cheese to your customized pizza
                </h3>

                <div className="sh-ingredients">
                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Manchego</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.manchego}
                      onToggle={() => toggleIngredient("manchego")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Mozzarella</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.mozzarella}
                      onToggle={() => toggleIngredient("mozzarella")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Cheddar</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.cheddar}
                      onToggle={() => toggleIngredient("cheddar")}
                    />
                  </div>

                  <div className="sh-ingredient-1">
                    <h4 className="ingredient-title">Parmesan</h4>
                    <AddRemoveButton
                      isAdded={selectedIngredients.parmesan}
                      onToggle={() => toggleIngredient("parmesan")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
        className="btn-addIngredients"
        onClick={() => onApply(selectedIngredientNames)}
        >
        Add ingredients to your pizza
        </button>

        <button className="btn-resetModal" onClick={resetSelection}>
          Reset your selection
        </button>
        
        <button className="btn-closeModal" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
}

export default CustomPizzaModal;