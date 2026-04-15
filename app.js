const promptInput = document.getElementById('prompt');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const messages = document.getElementById('messages');
const newChatBtn = document.getElementById('newChatBtn');

const mockModes = ['analysis', 'creative', 'execution', 'strategy'];

function createMessage(text, role) {
  const article = document.createElement('article');
  article.className = `message ${role}`;

  const content = document.createElement('p');
  content.textContent = text;
  article.appendChild(content);

  return article;
}

function buildResponse(prompt) {
  const mode = mockModes[Math.floor(Math.random() * mockModes.length)];
  return `Gear (${mode}): Good direction. Here's a concise next step for "${prompt}".`;
}

function autoResizeTextarea() {
  promptInput.style.height = 'auto';
  promptInput.style.height = `${Math.min(promptInput.scrollHeight, 220)}px`;
}

function sendPrompt() {
  const text = promptInput.value.trim();
  if (!text) return;

  messages.appendChild(createMessage(text, 'user'));
  messages.appendChild(createMessage(buildResponse(text), 'assistant'));
  promptInput.value = '';
  autoResizeTextarea();
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', sendPrompt);

promptInput.addEventListener('input', autoResizeTextarea);
promptInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendPrompt();
  }
});

clearBtn.addEventListener('click', () => {
  promptInput.value = '';
  autoResizeTextarea();
  promptInput.focus();
});

newChatBtn.addEventListener('click', () => {
  messages.innerHTML = '';
  messages.appendChild(
    createMessage('New chat started. What would you like to work on?', 'assistant')
  );
  promptInput.value = '';
  autoResizeTextarea();
  promptInput.focus();
});

autoResizeTextarea();
