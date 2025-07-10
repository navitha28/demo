const messageInput = document.querySelector(".message-input");

// enter key press for sending messages
messageInput.addEventListener("keydown",(e) =>{
    const userMessage = e.target.value.trim();
    if(e.key == "enter" && userMessage) {
        console.log(userMessage)
    }
});

