import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    state: {
        type: Boolean,
        default: true
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;