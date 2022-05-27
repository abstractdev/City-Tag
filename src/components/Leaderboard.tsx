import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { useParams } from "react-router-dom";
import { getFilteredCityProperties } from "../helpers/getGameData";
import {
  StyledTable,
  StyledTd,
  StyledTdHeader,
  StyledTr,
} from "../shared-styles/leaderboardTable";
import { makeUserList } from "../helpers/makeUserList";

export function Leaderboard(props: propsInterface) {
  const { cityParam } = useParams();
  const { userData } = props;
  const filteredCityUsers = userData!.filter((e: any) => e.city === cityParam);
  const { filteredCityName, filteredCityColor, filteredCityFont } =
    getFilteredCityProperties(filteredCityUsers[0].city);

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
        <tbody>{makeUserList(filteredCityUsers!)}</tbody>
      </StyledTable>
    </LeaderboardContainer>
  );
}

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
