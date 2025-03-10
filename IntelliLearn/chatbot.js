function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    addMessage(userInput, "user-message");
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        getBotResponse(userInput);
    }, 500);
}

function addMessage(text, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = text;
    document.getElementById("messages").appendChild(messageDiv);
}

function getBotResponse(input) {
    let response = "";

    if (input.toLowerCase().includes("course")) {
        response = "What type of course are you interested in?";
    } else if (input.toLowerCase().includes("duration")) {
        response = "How long do you want the course to be?";
    } else if (input.toLowerCase().includes("cost")) {
        response = "What's your budget for the course?";
    } else {
        response = "I'm here to help! Please tell me what you need.";
    }

    addMessage(response, "bot-message");
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
