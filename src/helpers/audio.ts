import right from "../assets/sounds/right.wav";
import wrong from "../assets/sounds/wrong.wav";
import end from "../assets/sounds/end.wav";

export function audio() {
  const rightAudio = new Audio(right);
  const wrongAudio = new Audio(wrong);
  const endAudio = new Audio(end);

  return {
    rightAudio,
    wrongAudio,
    endAudio,
  };
}