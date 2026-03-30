import plusIcon from './assets/Icons/plus_icon.svg'
import minusIcon from './assets/Icons/minus_icon.svg'

function AddRemoveButton({ isAdded, onToggle }) {
  return isAdded ? (
    <button className="remove-btn" onClick={onToggle}>
      <img src={minusIcon} alt="" />
      Remove
    </button>
  ) : (
    <button className="add-btn" onClick={onToggle}>
      <img src={plusIcon} alt="" />
      Add
    </button>
  );
}

export default AddRemoveButton;
