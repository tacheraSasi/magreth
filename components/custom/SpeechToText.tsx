"use client";

import React, { useEffect } from 'react';
import { toast } from 'sonner';

// Defining the props interface
interface SpeechToTextProps {
  setInput: (input: string) => void;
}

const SpeechToText: React.FC<SpeechToTextProps> = ({ setInput }) => {
  // Detect the browser
  const isFirefox = typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes("firefox");

  const startSpeechRecognition = () => {
    if (isFirefox) {
      setInput("hi magreth");
      toast.error("Speech recognition is not supported in Firefox.");
      console.error("Speech recognition is not supported in Firefox.");
      return;
    }

    console.log("starting stt");

    // Checking if browser supports SpeechRecognition or webkitSpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setInput("hi magreth");
      toast.error("Speech recognition is not supported in this browser.");
      console.error("Speech recognition is not supported in this browser.");
      return;
    }

    // Initializing speech recognition
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    // Handling results
    recognition.onresult = function (event: any) {
      const transcript = event.results[0][0].transcript;
      console.log("You said: ", transcript);
      setInput(transcript); // Using setInput prop to pass the transcript
    };

    recognition.onerror = function (event: any) {
      setInput("hi magreth");
      console.error("Speech recognition error:", event.error);
    };
  };

  useEffect(() => {
    startSpeechRecognition();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[24px] h-16 overflow-hidden resize-none rounded-lg text-base bg-muted border-none">
      <div className="flex gap-2">
        <div className="loader"></div>
        <span>Listening...</span>
      </div>
    </div>
  );
};

export default SpeechToText;
