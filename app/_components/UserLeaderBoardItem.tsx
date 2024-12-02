import Image from "next/image";
import { LeaderboardProps } from "./UserLeaderBoard";

function UserLeaderBoardItem({
  leaderboardItem,
}: {
  leaderboardItem: LeaderboardProps;
}) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3">
        <div className="relative h-9 w-9 rounded-full bg-blue-100">
          <Image
            src={`${leaderboardItem.image}/png`}
            fill
            className="flex-1 rounded-full object-contain"
            alt="Tesla Image"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-black capitalize">
            {leaderboardItem?.name}
          </span>
          <span className="text-gray-500 capitalize text-xs">
            {leaderboardItem.points} Points -{" "}
            {leaderboardItem.accuracy_percentage}% Correct
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 text-sm">
        <span className="font-bold">
          {leaderboardItem?.accuracy_percentage -
            leaderboardItem?.previous_accuracy_percentage}
        </span>
        {leaderboardItem?.accuracy_percentage -
          leaderboardItem?.previous_accuracy_percentage >=
        0 ? (
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.16159 1.16797C5.53422 0.501302 6.46578 0.501302 6.83841 1.16797L11.8689 10.168C12.2415 10.8346 11.7757 11.668 11.0304 11.668H0.969553C0.224302 11.668 -0.241479 10.8346 0.131147 10.168L5.16159 1.16797Z"
                fill="#1FE08F"
              />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.16159 11.168C5.53422 11.8346 6.46578 11.8346 6.83841 11.168L11.8689 2.16797C12.2415 1.5013 11.7757 0.667969 11.0304 0.667969H0.969553C0.224302 0.667969 -0.241479 1.5013 0.131147 2.16797L5.16159 11.168Z"
                fill="#FF3E13"
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}

export default UserLeaderBoardItem;
