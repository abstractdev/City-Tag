import { StyledTd, StyledTimeTd } from "../shared-styles/leaderboardTable";
import { trimData } from "./trimData";

export function makeUserList(userData: any) {
  const sortedUserData = userData!.sort((a: any, b: any) => {
    return a.time! - b.time!;
  });
  return sortedUserData.map((e: any, i: number) => {
    return (
      <tr key={e.id}>
        <StyledTd>{i + 1}</StyledTd>
        <StyledTd>{e.name}</StyledTd>
        <StyledTimeTd>{trimData(e.displayTime)}</StyledTimeTd>
      </tr>
    );
  });
}
