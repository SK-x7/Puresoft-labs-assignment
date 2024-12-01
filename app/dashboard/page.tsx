import { SidebarTrigger } from "@/components/ui/sidebar";
import Barchart from "../_components/Barchart";
import GroupsLeaderBoard from "../_components/GroupsLeaderBoard";
import Header from "../_components/Header";
import Metrics from "../_components/Metrics";
import SelectHeaders from "../_components/SelectHeaders";
import SelectTimeFrame from "../_components/SelectTimeFrame";
import Topics, { topicProps } from "../_components/Topics";
import UserLeaderBoard from "../_components/UserLeaderBoard";
import { getData } from "../_lib/actions";

export const metadata = {
  title: "Dashboard",
};

async function page() {
  const data = await getData();
  console.log(data);

  if (!data) return null;

  return (
    <>
      <SidebarTrigger></SidebarTrigger>
      <Header></Header>
      <main className=" flex flex-col gap-4 flex-1">
        <section className="grid grid-cols-3 w-full justify-between gap-4">
          <SelectHeaders
            groups_leaderboard={data?.groups_leaderboard}
            user_leaderboard={data?.user_leaderboard}
          ></SelectHeaders>
        </section>

        <section className=" grid grid-cols-1 grid-rows-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 min-[420px]:gap-3 sm:gap-4 md:gap-5">
          <Metrics metrics={data?.metrics}></Metrics>

          <div className="w-full flex flex-col bg-white py-5 gap-6 rounded-xl h-full">
            <div className="flex px-8 justify-between items-center w-full">
              <span>Activity</span>
              <div className="w-1/3">
                <SelectTimeFrame></SelectTimeFrame>
              </div>
            </div>
            <div className="sm:w-full md:h-full md:w-full  px-3 flex justify-center items-center flex-1">
              <Barchart data={data.activity.monthly}></Barchart>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {Object.entries(data?.topics).map(([topicName, topicData]) => (
            <Topics
              topicName={topicName}
              topicData={topicData as unknown as topicProps[]}
              key={topicName}
            ></Topics>
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <UserLeaderBoard
            leaderboard={data?.user_leaderboard}
          ></UserLeaderBoard>
          <GroupsLeaderBoard
            leaderboard={data?.groups_leaderboard}
          ></GroupsLeaderBoard>
        </section>
      </main>
    </>
  );
}

export default page;
