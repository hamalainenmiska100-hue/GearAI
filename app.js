const promptInput = document.getElementById('prompt');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const responseText = document.getElementById('responseText');

const mockModes = [
  'analysis mode',
  'creative mode',
  'execution mode',
  'strategy mode',
];

function buildResponse(prompt) {
  const mode = mockModes[Math.floor(Math.random() * mockModes.length)];
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `Gear (${mode}, ${now}): Great prompt. Here is a suggested direction: ${prompt}`;
}

sendBtn.addEventListener('click', () => {
  const text = promptInput.value.trim();
  if (!text) {
    responseText.textContent = 'Add a prompt first so Gear can help.';
    return;
  }
  responseText.textContent = buildResponse(text);
});

clearBtn.addEventListener('click', () => {
  promptInput.value = '';
  responseText.textContent = 'Your AI response will appear here.';
  promptInput.focus();
});
