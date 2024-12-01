import React from "react";
import SelectTimeFrame from "./SelectTimeFrame";
import SelectPeople from "./SelectPeople";
import { GroupLeaderboardProps } from "./GroupsLeaderBoard";
import { LeaderboardProps } from "./UserLeaderBoard";

function SelectHeaders({
  groups_leaderboard,
  user_leaderboard,
}: {
  groups_leaderboard: GroupLeaderboardProps[];
  user_leaderboard: LeaderboardProps[];
}) {
  return (
    <>
      <div className="!w-full">
        <SelectTimeFrame></SelectTimeFrame>
      </div>
      <div className="w-full">
        <SelectPeople
          groups={groups_leaderboard}
          users={user_leaderboard}
        ></SelectPeople>
      </div>
      <div className="w-full">
        <SelectTimeFrame></SelectTimeFrame>
      </div>
    </>
  );
}

export default SelectHeaders;
