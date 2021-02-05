const avatars = require("give-me-an-avatar")
let image = avatars.giveMeAnAvatar({
    Name: "John Smith",
    Size: 128
}); 

console.log(image)