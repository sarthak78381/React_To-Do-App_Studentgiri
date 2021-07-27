const Task = require('../../models/task');

const postUserTask = async (req, res) => {
    try {
        const new_task = new Task({
            ...req.body,
            owner: req.user._id
        });
        await new_task.save()
        res.status(201).send(new_task)
    } catch(error) {
        res.status(400);
        res.send(error.message);
    }
}

const getUserTask = async (req, res) => {
    try{
        await req.user.populate({
            path: 'tasks'
        }).execPopulate();
        res.send(req.user.tasks)
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateUserTask = async (req, res) => {
    let {id: _id} = req.params;
    let allowedUpdates = ["completed", "title"];
    let updating = Object.keys(req.body);
    let isUpdateAllowed = updating.every(update => allowedUpdates.includes(update));
    
    if (!isUpdateAllowed) return res.status(400).send('invalid updates!');
    
    try{
        const task = await Task.findOneAndUpdate({_id, owner: req.user._id}, req.body, {new: true, runValidators: true});
        if (!task) return res.status(404).send();
        return res.send(task)
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
}

const deleteUserTask = async (req, res) => {
    let {id: _id} = req.params;
    try{
        const task = await Task.findOneAndDelete({_id, owner: req.user._id});
        if (!task) return res.status(404).send();
        return res.send(task)
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
}

module.exports = {
    deleteUserTask,
    updateUserTask,
    getUserTask,
    postUserTask
}