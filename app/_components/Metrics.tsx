import IncreasingLineSvg from "./IncreasingLineSvg";

interface active_users_props {
  current: number;
  total: number;
}

export interface metricsProps {
  active_users: active_users_props;
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
}

function Metrics({ metrics }: { metrics: metricsProps }) {
  return (
    <div className="w-full grid grid-cols-2 min-[420px]:grid-cols-3  sm:grid-cols-3 row-auto gap-4 h-full lg:h-80">
      <div className="p-4 flex flex-col bg-white rounded-xl min-[420px]:gap-2 gap-3 h-full">
        <span className=" text-xs md:test-base">Active Users</span>
        <span className="text-lg md:text-xl lg:text-2xl font-bold">
          {metrics.active_users?.current}
          <span className="text-gray-600 text-sm">
            /{metrics.active_users?.total}
          </span>
        </span>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-xl gap-3 h-full">
        <span className="text-xs md:test-base">Question Answered</span>
        <span className="text-lg md:text-xl  lg:text-2xl  font-bold">
          {metrics.questions_answered}
        </span>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-xl gap-3 h-full">
        <span className="text-xs md:test-base">Av. session length</span>
        <span className="text-lg md:text-xl lg:text-2xl  font-bold">
          {Math.floor(metrics.average_session_length_seconds / 60)}m
          <span className="ml-1">
            {metrics.average_session_length_seconds -
              Math.floor(metrics.average_session_length_seconds / 60) * 60}
            s
          </span>
        </span>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-xl justify-start gap-1 sm:justify-evenly h-full">
        <span className="text-xs md:test-base">Starting knowledge</span>
        <span className="text-lg md:text-xl lg:text-2xl  font-bold">
          {metrics.starting_knowledge_percentage}%
        </span>
        <div className="w-full">
          <IncreasingLineSvg></IncreasingLineSvg>
        </div>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-xl justify-start gap-1 sm:justify-evenly h-full">
        <span className="text-xs md:test-base">Current knowledge</span>
        <span className="text-lg md:text-xl lg:text-2xl  font-bold">
          {metrics.current_knowledge_percentage}%
        </span>
        <div className="w-full">
          <IncreasingLineSvg></IncreasingLineSvg>
        </div>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-xl justify-start gap-1  sm:justify-evenly h-full">
        <span className="capitalize text-xs md:test-base">knowledge gain</span>
        <span className="text-lg md:text-xl lg:text-2xl  font-bold">
          {Math.round(
            ((metrics.current_knowledge_percentage -
              metrics.starting_knowledge_percentage) /
              metrics.starting_knowledge_percentage) *
              100
          )}
          %
        </span>
        <div className="w-full">
          <IncreasingLineSvg></IncreasingLineSvg>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
