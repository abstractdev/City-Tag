import { StyledTd, StyledTimeTd } from "../shared-styles/leaderboardTable";
import { convertMsToDisplayTime } from "./convertMsToDisplayTime";
import { trimData } from "./trimData";

export function makeUserList(userData: any) {
  const sortedUserData = userData!.sort((a: any, b: any) => {
    return a.backendTime! - b.backendTime!;
  });
  return sortedUserData.map((e: any, i: number) => {
    return (
      <tr key={e.id}>
        <StyledTd>{i + 1}</StyledTd>
        <StyledTd>{e.name}</StyledTd>
        <StyledTimeTd>
          {trimData(convertMsToDisplayTime(e.backendTime))}
        </StyledTimeTd>
      </tr>
    );
  });
}
