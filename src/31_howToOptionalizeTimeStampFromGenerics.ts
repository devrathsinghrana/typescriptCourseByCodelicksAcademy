type OptionalizeTimeStamp<T extends { timestamp: unknown }> = Omit<
  T,
  "timestamp"
> &
  Partial<Pick<T, "timestamp">>;//this will make timestamp optional

type Result1 = OptionalizeTimeStamp<{
  timestamp: number; //we need to pass timestamp here as it is extended but it return an object type with timestamp optional
  message: string;
  level: "info" | "warn" | "error";
}>;

const result1: Result1 = {
  message: "De",
  level: "error",
  //   kk:"EFde"//Error: kk is unknown property
};

const result2: Result1 = {
  timestamp: 123, //this is optional due to intersecting omit and partial logic above
  message: "De",
  level: "error",
};
