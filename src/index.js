import { server } from "./express";

const makeLogger = logLabel => {
  const log = data => console.timeLog(logLabel, data);
  const loggerStart = () => console.time(logLabel) || log("Start");
  const loggerEnd = () => console.timeEnd(logLabel) || log("End");
  const wrapCall = async (onStart, onEnd, toRun, ...toRunArgs) => {
    log(onStart);
    const results = await toRun(...toRunArgs);
    log(onEnd);
    return results;
  };

  log.start = loggerStart;
  log.end = loggerEnd;
  log.call = wrapCall;

  return log;
};

const start = async () => {
  const log = makeLogger("startup-log");
  log.start();
  const app = log.call(
    "Calling server funtion...",
    "...call finished!",
    server
  );
  log.end();
};

start();
