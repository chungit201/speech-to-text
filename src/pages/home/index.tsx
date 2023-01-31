import React, {useEffect, useState} from "react";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
// @ts-ignore
import {useSpeechSynthesis} from "react-speech-kit";

const HomePage: React.FunctionComponent = () => {
  const [lang, setLang] = useState("ja-JP");
  const [voices, setVoices] = useState<any[]>([]);

  const synth = window.speechSynthesis;

  // const commands = [
  //   {
  //     command: 'Play',
  //     callback: () => video.play()
  //   },
  //   {
  //     command: 'Pause',
  //     callback: () => video.pause()
  //   },
  //   {
  //     command: 'Rewind',
  //     callback: () => video.currentTime-=10
  //   },
  //   {
  //     command: 'Fast Forward',
  //     callback: () => video.currentTime+=10
  //   },
  //   {
  //     command: 'Mute',
  //     callback: () => video.muted=true
  //   },
  //   {
  //     command: 'Unmute',
  //     callback: () => video.muted=false
  //   },
  //   {
  //     command: 'clear',
  //     callback: ({ resetTranscript }) => resetTranscript()
  //   }
  // ]

  const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  useEffect(() => {
    setVoices(synth.getVoices())
  }, [])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStart = async () => {
    await SpeechRecognition.startListening({language: lang})
  }

  function loadVoices(message: any, voice?: any) {
    const msg = new SpeechSynthesisUtterance();
    console.log(msg)
    msg.voice = voice || voices[13]; // female voice
    msg.text = message;
    msg.rate = 0.8;
    speechSynthesis.speak(msg);
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>

      <button
        className='btn btn-primary btn-lg'
        onClick={() => loadVoices(transcript)}
      >
        Speak
      </button>
    </div>
  );
}

export default HomePage
