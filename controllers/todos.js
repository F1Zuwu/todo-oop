import { Todo } from "../models/todo.js";

class todoController {
    constructor(){
        this.TODOS = []
    }

    createTodo(req,res) {
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)
        
        this.TODOS.push(newTodo)

        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })
    }

    getTodos(req, res) {
        res.json({tasks: this.TODOS})
    }

    updateTodo(req,res) {
        const todoId = req.params.id
        const updatedTask = req.body.task
        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if(todoIndex < 0) {
            res.json({
                message:"Could not find todo with such index"
            })
            throw new Error("Could not find todo!")
        }

        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)
        res.json({
            message: "updated todo",
            updatedTask: this.TODOS[todoIndex]
        })
    }
}

export const TodoController = new todoController()