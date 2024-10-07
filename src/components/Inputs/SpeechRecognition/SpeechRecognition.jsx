"use client";
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handlingVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div>
      <IconMicrophone
        onClick={handlingVoiceRecording}
        className="text-gray-400"
        size={24}
      />
    </div>
  );
};

export default SpeechRecognitionComponent;
