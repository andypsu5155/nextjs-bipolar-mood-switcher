"use client"

import React, { createContext, useContext, useState } from 'react'
import { emotions } from '@/lib/data'


type Mood = typeof emotions[number];

type MoodContextType = {
  mood: Mood;
  toggleMood: () => void;
};

type MoodContextProviderProps = {
  children: React.ReactNode;
};

const MoodContext = createContext<MoodContextType | null>(null);

export default function MoodContextProvider({children}: MoodContextProviderProps) {
  const [currentMood, setMood] = useState<Mood>(emotions[0]);

  const toggleMood = () => {
    const currentMoodIndex = emotions.findIndex((emotion) => emotion === currentMood);
    const nextMoodIndex = (currentMoodIndex + 1) % emotions.length;
    setMood(emotions[nextMoodIndex]);
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

