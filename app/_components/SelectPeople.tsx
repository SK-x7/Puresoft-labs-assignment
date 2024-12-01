"use client";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import { GroupLeaderboardProps } from "./GroupsLeaderBoard";
import { LeaderboardProps } from "./UserLeaderBoard";

function SelectPeople({
  groups,
  users,
}: {
  groups: GroupLeaderboardProps[];
  users: LeaderboardProps[];
}) {
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(
    undefined
  );
  const [selectedUser, setSelectedUser] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="w-full">
      <Select>
        <SelectTrigger className="!w-full bg-white">
          <SelectValue placeholder="People" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <div className="flex flex-col gap-5 px-4 py-2 divide-y-2 text-xs">
            {(selectedGroup || selectedUser) && (
              <div className="flex gap-4">
                {selectedGroup && (
                  <span className="bg-gray-100 py-1 px-3 rounded-2xl flex justify-center items-center gap-1">
                    {selectedGroup}{" "}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => {
                        setSelectedGroup(undefined);
                      }}
                    ></X>
                  </span>
                )}
                {selectedUser && (
                  <span className="bg-gray-100 py-1 px-3 rounded-2xl flex justify-center items-center gap-1">
                    {selectedUser}{" "}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => {
                        setSelectedUser(undefined);
                      }}
                    ></X>
                  </span>
                )}
              </div>
            )}
            {groups && (
              <div className="flex flex-col gap-3">
                <span className="text-sm text-gray-700">Groups</span>

                <RadioGroup
                  onValueChange={(value) => {
                    setSelectedGroup(value);
                  }}
                  value={selectedGroup}
                >
                  {groups.map((group) => (
                    <div
                      className="flex items-center space-x-2"
                      key={group?.group_name}
                    >
                      <RadioGroupItem
                        value={group?.group_name}
                        id={group?.group_name}
                      />
                      <Label htmlFor={group?.group_name}>
                        {group?.group_name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {users && (
              <div className="flex flex-col gap-3">
                <span className="text-sm text-gray-700">Users</span>
                <RadioGroup
                  onValueChange={(value) => {
                    setSelectedUser(value);
                  }}
                >
                  {users.map((user) => (
                    <div
                      className="flex items-center space-x-2"
                      key={user?.name}
                    >
                      <RadioGroupItem value={user?.name} id={user?.name} />
                      <Label htmlFor={user?.name}>{user?.name}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectPeople;
