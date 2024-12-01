import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectTimeFrameItems = [
  {
    name: "Last 7 days",
    value: "7-days",
  },
  {
    name: "this month",
    value: "this-month",
  },
  {
    name: "this year",
    value: "this-year",
  },
  {
    name: "custom",
    value: "custom",
  },
];

function SelectTimeFrame() {
  return (
    <div className="w-full">
      <Select>
        <SelectTrigger className="!w-full bg-white">
          <SelectValue placeholder="Timeframe" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {SelectTimeFrameItems &&
            SelectTimeFrameItems.map((item) => (
              <SelectItem value={item.value} className="capitalize" key={item.value}>
                {item.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectTimeFrame;
