import express from "express";
import { getPastEvents } from "./getEvents.js";
import { highestBidSubscription, allEventsSubscription } from "./subscription.js";
const app = express();

app.get("/events", getPastEvents);


// Subscriptions
highestBidSubscription();
allEventsSubscription();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
