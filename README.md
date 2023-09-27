# You-Flix-Backend

## Models
- user model

const userSchema = new mongoose.Schema({
    name: { type: string, required: true, unique: true}
    image:{ type: string}
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true ,}
});





- video model

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  // Add more fields as needed, e.g., likes, comments, timestamps, etc.
});


edit model
 const editSchema = new mongoose.Schema({
    userId: { ref: "User", type: mongoose.Schema.Types.ObjectId},
    videoId: { ref: "Video", type: mongoose.Schema.Types.ObjectId}
 })

## Build with
MERN

## Description
You-Flix is a video sharing social media website that will connect people to one another through media. You will be able to post videos and see other users video posts aswell as make and view user profiles


## Installation 
go to "pending url"


