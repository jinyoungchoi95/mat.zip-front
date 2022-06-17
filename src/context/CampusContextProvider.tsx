import React from "react";

import useStoredState from "hooks/useStoredState";

export type Campus = "잠실" | "선릉";
type CampusContext = Campus | null;

type SetCampusContext = (value: CampusContext) => void;

export const campusContext = React.createContext<null | CampusContext>(null);
export const setCampusContext = React.createContext<SetCampusContext>(() => {});

function CampusContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [campus, setCampus] = useStoredState<CampusContext>("campus", null);

  return (
    <campusContext.Provider value={campus}>
      <setCampusContext.Provider value={setCampus}>
        {children}
      </setCampusContext.Provider>
    </campusContext.Provider>
  );
}

export default CampusContextProvider;