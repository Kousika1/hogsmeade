import { contract } from "./contract.js";

export const getPastEvents = async () => {
  let options = { fromBlock: 21595273, to: 21595339 };
  const allEvents = [];
  const events = await contract.getPastEvents("allEvents", options);

  events.map((event) => {
    const isExist = allEvents.find((data) => (data.event = event.event));
    if (!isExist) {
      allEvents.push({
        event: event.event,
        topic: event.raw.topics[0],
      });
    }
  });
  console.log(allEvents);
};
