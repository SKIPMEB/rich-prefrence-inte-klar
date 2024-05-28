const { EasyPresence } = require("easy-presence");
const client = new EasyPresence("878603502048411648"); // replace this with your Discord Client ID.

client.on("connected", () => {
    console.log("Hello,", client.environment.user.username);
});

client.on("activityUpdate", (activity) => {
    console.log("Now you're playing", activity ? activity.name : "nothing!");
});

client.on("error", (error) => {
    console.error("An error occurred:", error);
});

const largeImageUrl = "https://avatars.githubusercontent.com/u/94827767?v=4"; // Replace with your actual image URL

setInterval(() => {
    try {
        client.setActivity({
            details: "Using EasyPresence",
            state: "neato!",
            assets: {
                large_image: largeImageUrl,
                large_text: "EasyPresence",
                small_image: "octocat",
                small_text: "https://github.com/rblxrp/easypresence"
            },
            buttons: [
                {
                    label: "Visit on GitHub",
                    url: "https://github.com/rblxrp/easypresence"
                }
            ],
            party: {
                id: "1234567890",
                size: [1, 10]
            },
            timestamps: { start: new Date() }
        });
    } catch (error) {
        console.error("Failed to set activity:", error);
    }
}, 15000); // Set interval to 15 seconds to avoid rate limiting