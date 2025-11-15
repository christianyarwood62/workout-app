import { useContext } from "react";
import { createContext } from "react";

const TemplatesContext = createContext();

function TemplatesProvider({ children }) {
  return <TemplatesContext.Provider>{children}</TemplatesContext.Provider>;
}

function useTemplates() {
  const context = useContext(TemplatesContext);
  if (context === undefined) {
    throw new Error(
      "Templates Provider was used outside of the Templates Context"
    );
  }

  return context;
}

export { TemplatesProvider, useTemplates };
