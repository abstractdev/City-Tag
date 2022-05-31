import { keyframes } from "styled-components";

export const dropIn = keyframes`
0% {
  opacity: 0;
  transform: translate(0,-300px) scale(0.9, 1.1);
}
95% {
  opacity: 1;
  transform: translate(0, 0) scale(0.9, 1.1);
}
96% {
  opacity: 1;
  transform: translate(10px, 0) scale(1.2, 0.9);
}
97% {
  opacity: 1;
  transform: translate(-10px, 0) scale(1.2, 0.9);
}
98% {
  opacity: 1;
  transform: translate(5px, 0) scale(1.1, 0.9);
}
99% {
  opacity: 1;
  transform: translate(-5px, 0) scale(1.1, 0.9);
}
100% {
  opacity: 1;
  transform: translate(0, 0) scale(1, 1);
  }
`;

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const spinIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0, 0) rotate(360deg);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1) rotate(0deg);
  }
`;

export const growIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const pulsate = keyframes`
  0% {
      transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
