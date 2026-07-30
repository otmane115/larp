import { createContext, useState } from 'react';

export const GameContext = createContext<any>(null);

export const GameProvider = ({ children }: any) => {
  const [stage, setStage] = useState<'boot' | 'room' | 'desktop' | 'wired'>('boot');
  const [secrets, setSecrets] = useState({ diaryRead: false, terminalAccess: false });

  return (
    <GameContext.Provider value={{ stage, setStage, secrets, setSecrets }}>
      {children}
    </GameContext.Provider>
  );
};
