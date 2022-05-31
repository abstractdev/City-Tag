import styled from "styled-components";
import { convertMsToDisplayTime } from "../helpers/convertMsToDisplayTime";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { useEffect, useRef } from "react";
import { spinIn } from "../shared-styles/keyframes.styles";

export function Timer(props: propsInterface) {
  const { time, setTime, gameIsActive } = props;
  const timerRef = useRef(0);

  const startHandler = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = window.setInterval(
      () => setTime!((prev: number) => prev + 1),
      1000
    );
  };
  const stopHandler = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  };

  useEffect(() => {
    if (gameIsActive) {
      startHandler();
    } else if (!gameIsActive) {
      stopHandler();
    }
    return () => clearInterval(timerRef.current);
  }, [gameIsActive]);

  return (
    <>
      <TimerDiv>
        <TimerSpan>
          {time! < 1000 ? `${time!}s` : convertMsToDisplayTime(time!)}
        </TimerSpan>
      </TimerDiv>
    </>
  );
}

const TimerDiv = styled.div<stylesInterface>`
  font-family: "metropolis";
  padding: 0.2em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  @media screen and (max-width: 670px) {
    font-size: 0.6rem;
  }
  animation: ${spinIn} 2s ease;
`;
const TimerSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`;
