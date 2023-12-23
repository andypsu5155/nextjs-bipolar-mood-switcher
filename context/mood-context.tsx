"use client"

import React, { createContext, useContext, useState } from 'react'
import { emotions } from '@/lib/data'


type Mood = typeof emotions[number]['name'];

type MoodContextType = {
  mood: Mood;
  toggleMood: () => void;
};

type MoodContextProviderProps = {
  children: React.ReactNode;
};

const MoodContext = createContext<MoodContextType | null>(null);

export default function MoodContextProvider({children}: MoodContextProviderProps) {
  const emotionNames = emotions.map((emotion) => emotion.name);
  const [currentMood, setMood] = useState<Mood>(emotionNames[0]);

  const toggleMood = () => {
    const currentMoodIndex = emotionNames.indexOf(currentMood);
    const nextMoodIndex = (currentMoodIndex + 1) % emotionNames.length;
    setMood(emotionNames[nextMoodIndex]);
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

