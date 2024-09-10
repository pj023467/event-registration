const maxParticipants = 10:
const eventCounts = JSON.parse(localStorage.getItem('eventCounts')) || {};

// Reference HTML elements
const eventDropdown = document.getElementById('eventDropdown');
const statusMessage = document.getElementById('statusMessage');
const submitBtn = document.getElementById('submitBtn');

// Handle event selection and registration
submitBtn.addEventListener('click', function() {
  const selectedEvent = eventDropdown.value;
  
  // Initialize count for the event if it doesn't exist
  if (!eventCounts[selectedEvent]) {
    eventCounts[selectedEvent] = 0;
  }

  // Check if max participants limit has been reached
  if (eventCounts[selectedEvent] < maxParticipants) {
    eventCounts[selectedEvent]++;
    localStorage.setItem('eventCounts', JSON.stringify(eventCounts));
    statusMessage.textContent = `You have successfully registered for ${selectedEvent}.`;
  } else {
    statusMessage.textContent = `Sorry, ${selectedEvent} is full.`;
  }
});
