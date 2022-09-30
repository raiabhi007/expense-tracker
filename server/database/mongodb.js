import mongoose from 'mongoose'

async function connect() {
    await mongoose.connect("mongodb+srv://raiabhi007:raiabhi007@expense-tracker.rabd4i8.mongodb.net/?retryWrites=true&w=majority"
);
console.log('MongoDB connection is successful')
}

export default connect;

