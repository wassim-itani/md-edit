import { Logo } from "../../components/Logo";
import { TogglePreviewButton } from "../../components/TogglePreviewButton";
import { ExportDropdown } from "../../components/ExportDropdown";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <Logo />
      </nav>
      <div className="controls">
        <TogglePreviewButton />
        <ExportDropdown />
      </div>
    </header>
  );
};
