import TopicItem from "./TopicItem";

export interface topicProps {
  image: string;
  name: string;
  correct_percentage: number;
}

function Topics({
  topicName,
  topicData,
}: {
  topicName: string;
  topicData: topicProps[];
}) {
  console.log(topicData);
  return (
    <div className="w-full flex flex-col p-5 sm:px-3  rounded-3xl bg-white">
      <h1 className="capitalize  text-gray-700">{topicName} Topics</h1>
      <div className="flex flex-col gap-5 py-5">
        {topicData?.map((topic) => (
          <TopicItem
            topic={topic}
            topicName={topicName}
            key={topic?.name}
          ></TopicItem>
        ))}
      </div>
    </div>
  );
}

export default Topics;
