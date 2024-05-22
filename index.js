const EasyPresence = require("easy-presence").EasyPresence;
const client = new EasyPresence("1082605900310773790"); // replace this with your Discord Client ID

client.on("connected", () => {
    console.log("Hello,", client.environment.user.username);
});

client.on("activityUpdate", (activity) => {
    console.log("Now you're playing", activity ? activity.name : "nothing!");
});

client.on("error", (error) => {
    console.error("An error occurred:", error);
});

const largeImageUrl = "https://media.discordapp.net/attachments/921114625020395540/1242378155034153040/Skarmavbild_2018-09-13_kl.webp"; 

function updateActivity() {
    client.setActivity({
  activity: {
            details: "Using EasyPresence",
            state: "neato!",
            assets: {
                largeImage: largeImageUrl,
                largeText: "EasyPresence",
                smallImage: "https://example.com/small_image.png", // Example small image URL
                smallText: "Visit on GitHub"
            },
            buttons: [
                { label: 'Visit on GitHub', url: 'https://github.com/rblxrp/easypresence' }
            ],
            party: { id: "1234567890", size: [1, 10] },
            timestamps: { start: new Date() }
        }
    }).catch(error => {
        console.error("Failed to set activity:", error);
    });
}

client.on("ready", () => {
    console.log("Rich Presence is active");
    updateActivity(); // Set the initial activity
    setInterval(updateActivity, 10000); // Update activity every 10 seconds
});

client.connect().catch(error => {
    console.error("Failed to connect:", error);
});