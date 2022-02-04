const Task=require('../model/Task');

const getAllTasks= async (req,res)=>{
    try {
         const tasks=await Task.find({});
        res.status(201).json({tasks})
    } catch (error) {
        res.status(404).json({error})
        
    }
}

const createTask= async (req,res)=>{
    try {
        const task=await Task.create(req.body);
       res.status(201).json({task})
   } catch (error) {
       res.status(404).json({error})
       
   }}

const getTask=async (req,res)=>{
    try {
        const{id:taskID}=req.params
        const task=await Task.findOne({_id:taskID});
        if(!task){
            res.status(500).json({msg:`No data with id:${taskID}`})
        }
       res.status(201).json({task})
   } catch (error) {
       res.status(404).json({error})
       
   }}

const updateTask=async (req,res)=>{
    try {
        const{id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
            res.status(500).json({msg:`No data with id:${taskID}`})
        }
       res.status(201).json({task})
   } catch (error) {
       res.status(404).json({error})
       
   }}

const deleteTask=async (req,res)=>{
    try {
        const{id:taskID}=req.params
        const task=await Task.findOneAndRemove({_id:taskID});
        if(!task){
            res.status(500).json({msg:`No data with id:${taskID}`})
        }
       res.status(201).json({task})
   } catch (error) {
       res.status(404).json({error})
       
   }}

module.exports={
    getAllTasks,getTask,createTask,updateTask,deleteTask
}