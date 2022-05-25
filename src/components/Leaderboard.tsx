import { trimData } from "../helpers/trimData";
import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { useParams } from "react-router-dom";
import { getFilteredCityProperties } from "../helpers/getGameData";

export function Leaderboard(props: propsInterface) {
  const { cityParam } = useParams();
  const { userData } = props;
  const filteredCityUsers = userData!.filter((e: any) => e.city === cityParam);
  const { filteredCityName, filteredCityColor, filteredCityFont } =
    getFilteredCityProperties(filteredCityUsers[0].city);

  const sortedUserData = filteredCityUsers!.sort((a: any, b: any) => {
    return a.time! - b.time!;
  });
  const userItems = sortedUserData.map((e: any, i: number) => {
    return (
      <tr key={e.id}>
        <StyledTd>{i + 1}</StyledTd>
        <StyledTd>{e.name}</StyledTd>
        <StyledTimeTd>{trimData(e.displayTime)}</StyledTimeTd>
      </tr>
    );
  });
  return (
    <LeaderboardContainer filteredCityColor={filteredCityColor}>
      <StyledH1 filteredCityFont={filteredCityFont}>
        {filteredCityName}
      </StyledH1>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTd></StyledTd>
            <StyledTdHeader>Name</StyledTdHeader>
            <StyledTdHeader>Time</StyledTdHeader>
          </StyledTr>
        </thead>
        <tbody>{userItems}</tbody>
      </StyledTable>
    </LeaderboardContainer>
  );
}

const StyledTable = styled.table`
  width: 80%;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;
const StyledTr = styled.tr`
  border-bottom: 1px solid #121212;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledTimeTd = styled(StyledTd)`
  width: 20%;
  @media screen and (max-width: 670px) {
    width: 34%;
  }
`;
const StyledTdHeader = styled(StyledTd)`
  font-weight: 900;
`;

const LeaderboardContainer = styled.div<stylesInterface>`
  background-color: ${(props) => props.filteredCityColor};
  height: 100vh;
  padding-top: 2rem;
`;
const StyledH1 = styled.h1<stylesInterface>`
  font-size: 4rem;
  text-align: center;
  cursor: default;
  font-family: ${(props) => props.filteredCityFont};
`;
