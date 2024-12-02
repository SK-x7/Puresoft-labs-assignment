"use client";
import React, { useState } from "react";
import SelectTimeFrame from "./SelectTimeFrame";
import SelectPeople from "./SelectPeople";
import { GroupLeaderboardProps } from "./GroupsLeaderBoard";
import { LeaderboardProps } from "./UserLeaderBoard";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { useIsMobile2 } from "@/hooks/use-mobile2";

function SelectHeaders({
  groups_leaderboard,
  user_leaderboard,
}: {
  groups_leaderboard: GroupLeaderboardProps[];
  user_leaderboard: LeaderboardProps[];
}) {
  const isMobile  = useIsMobile2();
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  return (
    <>
      {!isMobile ? (
        <div className="grid grid-cols-3 justify-between gap-2 min-[420px]:gap-4 mb-2 sm:!m-0">
          <div className="w-full">
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
        </div>
      ) : (
        <div className=" relative mb-2">
          {/* Filter toggle button */}
          <div
            className="bg-white flex justify-center items-center rounded-lg p-1 w-min ml-auto"
            onClick={() => setOpenFilters(!openFilters)}
          >
            <Menu></Menu>
          </div>

          {/* Dropdown menu */}
          {openFilters && (
            <div
              className="absolute bg-white shadow-lg p-4 rounded-lg flex flex-col gap-2 z-50 right-9 -top-1 w-40"
              // Use absolute positioning to avoid layout shifts
            >
              <SelectPeople
                users={user_leaderboard}
                groups={groups_leaderboard}
              ></SelectPeople>
              <SelectTimeFrame></SelectTimeFrame>
              <SelectTimeFrame></SelectTimeFrame>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SelectHeaders;
