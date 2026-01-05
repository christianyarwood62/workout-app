import { ChevronDown } from "lucide-react";

function BurgerMenu({ onClick }) {
  return (
    <button onClick={onClick} className="burger-menu">
      <ChevronDown style={{ height: "1rem", fontWeight: 700 }} />
    </button>
  );
}

export default BurgerMenu;
