import express from "express"
import Article from "./model"

const router = express.Router()

router.post('/', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).json({
            message: "Article content can not be empty"
        });
    }

    // Create a Article
    const article = new Article({
        title: req.body.title, 
        content: req.body.content
    });

    // Save User in the database
    article.save()
    .then(data => {
        res.json({message:"User created successfully", data});
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating the User."
        });
    });
})

// Retrieve and return all notes from the database.
router.get("/",(req, res) => {
        Article.find()
        .then(articles => {
            res.json(articles);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
    }
) 

router.get("/:articleid",(req, res) => {
    Article.findById(req.params.articleid)
    .then(article => {
        if(!article) {
            return res.status(404).json({
                message: "article not found with id " + req.params.articleid
            });            
        }
        res.json(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "User not found with id " + req.params.articleid
            });                
        }
        return res.status(500).json({
            message: "Error retrieving user with id " + req.params.articleid
        });
    });
})

// Update a user identified by the userid in the request
router.put("/:articleid", (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).json({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    Article.findByIdAndUpdate(req.params.articleid, {
        title: req.body.title || "Untitled article",
        content: req.body.content
    }, {new: true})
    .then(article => {
        if(!article) {
            return res.status(404).json({
                message: "article not found with id " + req.params.articleid
            });
        }
        res.json(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "User not found with id " + req.params.articleid
            });                
        }
        return res.status(500).json({
            message: "Error updating user with id " + req.params.articleid
        });
    });
}) 

// Delete a user with the specified articleid in the request
router.delete("/:id",(req, res) => {
    Article.findByIdAndRemove(req.params.articleid)
    .then(user => {
        if(!user) {
            return res.status(404).json({
                message: "User not found with id " + req.params.articleid
            });
        }
        res.json({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                message: "User not found with id " + req.params.articleid
            });                
        }
        return res.status(500).json({
            message: "Could not delete user with id " + req.params.articleid
        });
    });
})  

export default router;