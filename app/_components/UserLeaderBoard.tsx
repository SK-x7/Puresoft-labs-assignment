import UserLeaderBoardItem from "./UserLeaderBoardItem";

export interface LeaderboardProps {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

function UserLeaderBoard({
  name,
  leaderboard,
}: {
  name: string;
  leaderboard: LeaderboardProps[];
}) {
  return (
    <div className="w-full bg-white p-5 rounded-3xl flex flex-col gap-6">
      {/* card */}
      <h1 className="text-sm text-gray-700">User Leaderboard</h1>
      <div className="w-full flex flex-col gap-5">
        {leaderboard &&
          leaderboard.map((item) => (
            <UserLeaderBoardItem
              leaderboardItem={item}
              key={item.name}
            ></UserLeaderBoardItem>
          ))}
      </div>
      {/* card */}
    </div>
  );
}

export default UserLeaderBoard;
