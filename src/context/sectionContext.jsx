import { useState, createContext, useContext } from "react";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
const SectionContext = createContext();

export const useSectionContext = () => useContext(SectionContext);

const Section = ({ children }) => {
  const [section, setSection] = useState({ gender: "men", icon: faMars });
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default Section;
