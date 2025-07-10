const userInput = document.getElementById('user-input');
const chatlogs = document.querySelector('.chatlogs');

function sendMessage() {
  const userMessage = userInput.value;
  userInput.value = '';

  // Display user's message
  const userMessageDiv = document.createElement('p');
  userMessageDiv.textContent = `You: ${userMessage}`;
  chatlogs.appendChild(userMessageDiv);

  // Simulate bot's response (replace with AI integration)
  const botMessage = getBotResponse(userMessage);
  const botMessageDiv = document.createElement('p');
  botMessageDiv.textContent = `Bot: ${botMessage}`;
  chatlogs.appendChild(botMessageDiv);
}

function getBotResponse(userMessage) {
  // Simple rule-based response
  if (userMessage.toLowerCase().includes('hello')) {
    return 'Hello! How can I help you today?';
  } else if (userMessage.toLowerCase().includes('how are you')) {
    return 'I am doing well, thank you. How are you?';
  } else {
    return 'I\'m still learning. Can you please rephrase your question?';
  }
}