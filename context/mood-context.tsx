"use client"

import React, { createContext, useContext, useState } from 'react'

type Mood = "happy" | "sad" | "angry";

type MoodContextType = {
  mood: Mood;
  toggleMood: () => void;
};

type MoodContextProviderProps = {
  children: React.ReactNode;
};


const MoodContext = createContext<MoodContextType | null>(null);

export default function MoodContextProvider({children}: MoodContextProviderProps) {
  const [currentMood, setMood] = useState<Mood>("happy");

  const toggleMood = () => {
    if (currentMood === "happy") {
      setMood("sad");
    } else if (currentMood === "sad") {
      setMood("angry");
    } else {
      setMood("happy");
    }
  }

  return (
    <MoodContext.Provider value={{mood: currentMood, toggleMood}}>
      {children}
    </MoodContext.Provider>
  )
};

export function useMoodContext() {
  const context = useContext(MoodContext);

  if (!context) {
    throw new Error("useMoodContext must be used within a MoodContextProvider");
  }

  return context;
};

