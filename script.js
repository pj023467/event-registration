const maxParticipants = 10;
const eventCounts = JSON.parse(localStorage.getItem('eventCounts')) || {};

// Reference the HTML elements
const eventDropdown = document.getElementById('eventDropdown');
const statusMessage = document.getElementById('statusMessage');
const submitBtn = document.getElementById('submitBtn');

// Handle event selection and registration
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // This prevents the form from submitting/reloading

  const selectedEvent = eventDropdown.value;

  // Initialize the event count if it doesn't exist
  if (!eventCounts[selectedEvent]) {
    eventCounts[selectedEvent] = 0;
  }

  // Check if the event has reached the maximum participants
  if (eventCounts[selectedEvent] < maxParticipants) {
    eventCounts[selectedEvent]++;
    localStorage.setItem('eventCounts', JSON.stringify(eventCounts));
    statusMessage.textContent = `You have successfully registered for ${selectedEvent}.`;
  } else {
    statusMessage.textContent = `Sorry, ${selectedEvent} is full.`;
  }
});
