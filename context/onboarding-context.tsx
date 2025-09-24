import React, { createContext, ReactNode, useContext, useState } from "react";

type OnboardingContextType = {
  onboarded: boolean | undefined;
  setOnboarded: (value: boolean | undefined) => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboarded, setOnboarded] = useState<boolean | undefined>();

  return (
    <OnboardingContext.Provider value={{ onboarded, setOnboarded }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
