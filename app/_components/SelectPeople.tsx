"use client";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, X } from "lucide-react";
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
          <SelectValue placeholder={(!!selectedGroup&&!!selectedUser)?"Multiple Selected":selectedGroup||selectedUser||"People"}></SelectValue>
        </SelectTrigger>
        <SelectContent className="w-full">
          <div className="flex flex-col gap-3 px-4 py-2 divide-y-2 text-xs">
            {
              <div className="flex justify-between items-center w-full">
                <h1 className="text-base text-gray-600">People :  
                  <span className="text-black ml-1 font-semibold"> 
                    
                  {(!!selectedGroup&&!!selectedUser)?"Multiple Selected": selectedGroup|| selectedUser||"All"}
                  </span>
                  </h1>
                  <span
                      className="cursor-pointer text-sm text-gray-600"
                      onClick={() => {
                        setSelectedUser(undefined);
                        setSelectedGroup(undefined);
                      }}
                    >Clear</span>
              </div>
            }
            {(selectedGroup || selectedUser) && (
              <div className="flex gap-4 pt-3">
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
            <div className="w-full flex justify-start items-center gap-[2px] pt-2">
              <Search size={20} className="text-gray-500"></Search>
              <input  placeholder="Search..." className=" w-5/6 text-[16px] px-2 py-[2px] text-gray-500"/>
            </div>
            {groups && (
              <div className="flex flex-col gap-3 py-3">
                <span className="text-sm text-gray-700">Groups</span>

                <RadioGroup
                  onValueChange={(value) => {
                    setSelectedGroup(value);
                  }}
                  value={selectedGroup}
                  
                >
                
                    <div
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={"All Groups"}
                        id={"All"}
                      />
                      <Label htmlFor={"All"}>
                        All Groups
                      </Label>
                    </div>
            
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
              <div className="flex flex-col gap-3 py-3">
                <span className="text-sm text-gray-700">Users</span>
                <RadioGroup
                  onValueChange={(value) => {
                    setSelectedUser(value);
                  }}
                >
                  <div
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={"All Users"}
                        id={"All"}
                      />
                      <Label htmlFor={"All"}>
                        All Users
                      </Label>
                    </div>
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
