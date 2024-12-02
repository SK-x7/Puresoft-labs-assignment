import Image from "next/image";
import { Progress as ProgressGreen } from "../../components/ui/progressGreen";
import { Progress as ProgressOrange } from "../../components/ui/progressOrange";
import { topicProps } from "./Topics";

function TopicItem({
  topic,
  topicName,
}: {
  topicName: string;
  topic: topicProps;
}) {
  return (
    <div className=" flex w-full justify-between items-center gap-2 sm:gap-3">
      <div className="relative h-9 w-9 md:h-8 md:w-10">
        <Image
          src={`${topic?.image}/png`}
          alt={topic?.name}
          fill
          className=" rounded-lg object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-sm md:text-base">{topic?.name}</span>
        <div className="flex justify-between items-center  !w-full">
          {topicName === "weakest" ? (
            <div className="w-3/4 sm:w-4/5 lg:w-3/4">
              <ProgressOrange
                className=""
                value={topic?.correct_percentage}
              ></ProgressOrange>
            </div>
          ) : (
            <div className="w-3/4 sm:w-4/5">
              <ProgressGreen
                className=""
                value={topic?.correct_percentage}
              ></ProgressGreen>
            </div>
          )}
          <span className="  capitalize text-sm w-2/5 lg:w-1/4 flex justify-end">
            {topic?.correct_percentage}% correct
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopicItem;
