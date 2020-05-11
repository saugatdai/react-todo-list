import React from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    items: [{ id: 1, title: 'wake up' },
    { id: 2, title: 'Make Breakfast' }],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => { console.log('handleChange') };
  handleSubmit = (e) => { console.log('handleSubmit') };
  clearList = (e) => { console.log('clearList') }
  handleDelete = (id) => { console.log(`handleDelete ${id}`) }
  handelEdit = (id) => { console.log(`handleEdit ${id}`) }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center'>
              todo input
              </h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handelEdit={this.handelEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
