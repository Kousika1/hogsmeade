import { contractWithListner } from "./contract.js";

export const highestBidSubscription = () => {
  contractWithListner.events
    .highestBidIncreased()
    .on("data", (event) => {
      console.log(event);
    })
    .on("error", console.error);
};

export const allEventsSubscription = () => {
    contractWithListner.events
      .allEvents()
      .on("All Events data", (event) => {
        console.log(event);
      })
      .on("error", console.error);
  };
  