import mongoose  from 'mongoose';

const AricleSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

export default mongoose.model('Article', AricleSchema);