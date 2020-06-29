import React from 'react';
import './App.css';

interface Todo {
  value: string
  isDone: boolean
}

interface State {
  todolist: Array<Todo>
  newTodo: string
}

export default class App extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      newTodo: '',
      todolist: [{
        value: "Get Milk",
        isDone: false
      }]
    }
  }

  done = (index:number) => {
    let allList = this.state.todolist;
    allList[index].isDone = true;
    this.setState({
      todolist: allList
    })
  }

  createButton = (index: number) => {
    return this.state.todolist[index].isDone ? '' : <button onClick={()=>{this.done(index)}}>Done</button>
  }

  createList = () => {
    return this.state.todolist.map((list: Todo, index: number) => {
      return <p>{list.value}{this.createButton(index)}</p>
    })
  }

  addTodo = (e:any) => {
    e.preventDefault()
    let allList = this.state.todolist;
    allList.push({
      value: this.state.newTodo,
      isDone: false
    })

    this.setState({
      todolist: allList,
      newTodo: ''
    })
  }

  handlechange = (e:any) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>What to do?</label>
          <input onChange={this.handlechange} value={this.state.newTodo} />
          <button onClick={this.addTodo}>Add</button>
          <div>
            {this.createList()}
          </div>
        </form>
      </div>
    );
  }

}
