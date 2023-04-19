import mongoose from "mongoose";
import News from "../models/news.js";
import User from "../models/user.js";

export const createNews = async (req, res) => {

    const news = req.body;

    try {
        if (!req.userId) return res.json({ message: 'Unauthenticated.' });
        else {
            const newNews = new News({
                title: news.title,
                message: news.message,
                /* creator: req.userId, */
                selectedFile: news.base64File ? news.base64File : ''
            });
            await newNews.save();
            res.status(201).json(newNews);
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateNews = async (req, res) => {

    const { id } = req.params;
    const newData = req.body;
    const news = News.findById(id);
    const newBody = {
        title: newData?.title,
        message: newData?.message,
        selectedFile: newData?.selectedFile !== "" ? newData?.selectedFile : news.selectedFile,
    };
    
    try {
        if (!req.userId) return res.json({ message: 'Unauthenticated.' });
        else {
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No news with id: ${id}`);
            const updatedNews = await News.findByIdAndUpdate(id, newBody, { new: true });
            res.status(200).json(updatedNews);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getAllNews = async (req, res) => {

    const { page } = req.query;

    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
        const total = await News.countDocuments({});
        const news = await News.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex); // give us the newest post
        res.status(200).json({ data: news, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getNews = async (req, res) => {

    const { id } = req.params;

    try {
        const news = await News.findById(id);
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteNews = async (req, res) => {

    const { id } = req.params;
    console.log(id)
    if (!req.userId) return res.json({ message: 'Unauthenticated.' });
    else {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No news with this id');

        await News.findByIdAndRemove(id);
        res.json({ message: "Post deleted successfully" });
    }
};
