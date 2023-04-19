import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
    title: String,
    message: String,
    /* creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, */
    selectedFile: { type: String, default: '' },
},
    { timestamps: true },
);

const News = mongoose.model('News', newsSchema);

export default News;