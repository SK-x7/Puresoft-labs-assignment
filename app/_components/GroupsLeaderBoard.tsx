import GroupsLeaderBoardItem from "./GroupsLeaderBoardItem";

export interface GroupLeaderboardProps {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

function GroupsLeaderBoard({
  name,
  leaderboard,
}: {
  name: string;
  leaderboard: GroupLeaderboardProps[];
}) {
  return (
    <div className="w-full bg-white p-5 rounded-3xl flex flex-col gap-6">
      <h1 className="text-sm text-gray-700">Groups Leaderboard</h1>
      <div className="w-full flex flex-col gap-5">
        {leaderboard &&
          leaderboard.map((item) => (
            <GroupsLeaderBoardItem
              leaderboardItem={item}
              key={item.group_name}
            ></GroupsLeaderBoardItem>
          ))}
      </div>
    </div>
  );
}

export default GroupsLeaderBoard;
