// List of Philippine Yearly Events
const events = [
  {
    name: "New Year's Day",
    month: "January",
    day: 1,
  },
  {
    name: "Feast of the Black Nazarene",
    month: "January",
    day: 9,
  },
  {
    name: "Ati-Atihan Festival",
    month: "January",
    day: 9,
  },
  {
    name: "Chinese New Year",
    month: "January",
    day: 26,
  },
  {
    name: "Valentine's Day",
    month: "February",
    day: 14,
  },
  {
    name: "Pahiyas Festival",
    month: "May",
    day: 15,
  },
  {
    name: "All Saints' Day",
    month: "November",
    day: 1,
  },
  {
    name: "Bonifacio Day",
    month: "November",
    day: 30,
  },
  {
    name: "Feast of the Immaculate Conception",
    month: "December",
    day: 8,
  },
  {
    name: "Simbang Gabi",
    month: "December",
    day: 16,
  },
  {
    name: "Christmas Day",
    month: "December",
    day: 25,
  },

  {
    name: "Rizal Day",
    month: "December",
    day: 30,
  },
];

// Selecting HTML Tags by ID
const eventsContainer = document.getElementById("events-container");

// This function calculates the remaining days until the specified events in the events array.
function daysLeft(events) {
  const today = new Date(); // Get today's date
  const thisYear = today.getFullYear(); // Get the current year
  const daysInYear = 365; // Set the number of days in a year

  // Create an empty object to store the days left for each event
  const result = {};

  for (const event of events) {
    // Create a new date object for the current event
    const eventDate = new Date(`${event.month} ${event.day}, ${thisYear}`);

    // Calculate the time difference between the current date and the event date
    const timeDiff = eventDate.getTime() - today.getTime();

    // Convert the time difference to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate the number of days left for the event
    const daysLeft = daysDiff < 0 ? daysDiff + daysInYear : daysDiff;

    // Store the number of days left for the current event in the result object
    result[event.name] = daysLeft;
  }

  return result; // Return the result object
}

// Loop through each event in the events array
for (let i = 0; i < events.length; i++) {
  // Create a new span element to hold the actual date
  const eventActualDate = document.createElement("span");

  // Assigning the actual month and day in eventActualDate
  eventActualDate.innerText = events[i].month + " " + events[i].day;

  // Add the "actual-date" class to the eventActualDate element
  eventActualDate.classList.add("actual-date");

  // Get the number of days left until the event date
  const eventDaysLeft = daysLeft([events[i]]);

  // Create a new h2 element to display the number of days left
  const daysLeftText = document.createElement("h2");

  // Set the inner HTML of the h2 element to include the number of days left
  daysLeftText.innerHTML = `${eventDaysLeft[events[i].name]}`;

  // Create a new p element to display the number of days left
  const daysLeftAdditionalText = document.createElement("p");

  // Set the inner HTML of the p element to day's left before text
  daysLeftAdditionalText.innerText = `DAY'S LEFT BEFORE`;

  // Create a new h3 element to display the event name
  const eventName = document.createElement("h3");

  // Set the text content of the h3 element to the name of the current event
  eventName.innerText = events[i].name;

  // Create a new div element to hold the days left and event name
  const eventBlock = document.createElement("div");

  // Add the eventActualDate element to the eventBlock
  eventBlock.append(eventActualDate);

  // Add the daysLeftText element to the eventBlock
  eventBlock.append(daysLeftText);

  // Add the daysLeftAdditionalText element to the eventBlock
  eventBlock.append(daysLeftAdditionalText);

  // Add the eventName element to the eventBlock
  eventBlock.append(eventName);

  // Add the "eventBlock" class to the eventBlock element
  eventBlock.classList.add("eventBlock");

  // Add the eventBlock element to the eventsContainer
  eventsContainer.append(eventBlock);
}
