exports.getPosts = (req, res, next) => {
    console.log('Get Data')
    res.status(200).json({
        posts: [{ title: 'First Post', content: 'This is the first post!' }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.name;
    console.log(title)


    // Create post in db
    res.status(201).json({
        message: 'Lokesh is great',
        title: title,


    });
};