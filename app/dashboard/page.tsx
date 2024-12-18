import Barchart from "../_components/Barchart";
import GroupsLeaderBoard from "../_components/GroupsLeaderBoard";
import Header from "../_components/Header";
import Metrics from "../_components/Metrics";
import Select from "../_components/Select";
import SelectHeaders from "../_components/SelectHeaders";
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
    
    
      <Header></Header>
      <main className=" flex flex-col sm:gap-4 flex-1 pt-5">
        {/* <section className="grid grid-cols-3 justify-between gap-2 min-[420px]:gap-4"> */}
        <section className="w-full">
          <SelectHeaders
            groups_leaderboard={data?.groups_leaderboard}
            user_leaderboard={data?.user_leaderboard}
          ></SelectHeaders>
        </section>

        <section className=" grid grid-cols-1 grid-rows-2  sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 min-[420px]:gap-3 sm:gap-4 md:gap-5  xl:!h-[350px]" >
          <Metrics metrics={data?.metrics}></Metrics>

          <div className="w-full flex flex-col bg-white py-5 gap-6 rounded-xl h-full">
            <div className="w-full flex flex-col gap-3 h-1/6">
              <div className="flex flex-col gap-3 w-full">
                
            <div className="flex px-8 justify-between items-center w-full">
              <span>Activity</span>
              <div className="w-1/6 flex justify-end">
                {/* <SelectTimeFrame></SelectTimeFrame> */}
                <Select></Select>
              </div>
            </div>
              <div className="w-full px-8">
                <hr className="bg-gray-200"></hr>
              </div>
              </div>
            </div>
            <div className="sm:h-5/6 sm:w-full md:h-full md:w-full  px-3 flex justify-center items-center flex-1">
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
