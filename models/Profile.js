import mongoose from "mongoose"

const Schema = mongoose.Schema

const profileSchema = new Schema ({
  imgURL: {
    type: String, 
    required: false
    },
  name: {
    type: String, 
    required: true
  },
	information: {
    type: String, 
    required: true
  }
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }