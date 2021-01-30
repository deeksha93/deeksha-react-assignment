import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import {onFetchTask,onDeleteTask} from './../Redux/TaskAction';
import { MDBDataTableV5 } from 'mdbreact';
import { Modal, ModalBody } from 'reactstrap';

 class Tasks extends Component {
                        constructor(props){
                            super(props);
                           
                            this.state={
                                tasks:[],
                                modal:false,
                                title:"",
                                completed:"",
                            }
                            this.getAllTask();
                        }

                    getAllTask=async()=>{
                       var res=await this.props.onFetchTask();
                    //    console.log(res);
                       this.setState({
                           tasks:res
                       })
                      
                    }

                    

                    onDelete=async(id)=>{
                        // const res=await this.props.onDeleteTask(id,this.props.history);
                        // console.log(res);
                        let taskList = this.state.tasks.filter(
                            x => x.id !== id
                          );
                           this.setState((prevState, props) => ({
                              tasks: taskList
                           }));
                           localStorage.setItem(
                            'tasks',
                            JSON.stringify(this.state.tasks)
                          );

                    }

                    toggle=(name,email)=>{
                        this.setState({modal:!this.state.modal,
                                    //    modal_name:name,
                                    //    modal_email:email,
                       })
                       }
                    onHandleChange=(e)=>{
                        this.setState({
                            [e.target.name]:e.target.value
                        })
                    }

                    addNewTask=()=>{
                        console.log("abc");
                         this.setState((prevState, props) => ({
                            tasks: [...prevState.tasks, {  
                              id: Math.max(...prevState.tasks.map(function(o){
                                return o.id
                              })) + 1,title:this.state.title , completed:this.state.completed,
                            }]
                          }));
                          this.toggle();
                    }

                    onCancel=async()=>{
                        await this.toggle();
                      }
                 

    render() {
        const {tasks,modal,title,completed}=this.state;
        // console.log(this.props);
       
         if(!tasks)return 'LOADING...';

         var data ={
            columns:[
                { label: 'Sr.No.', field: 'index' },
                { label: 'Title', field: 'title' },
                { label: 'Completed', field: 'completed' },
                { label: 'Action', field: 'action' },
            
            ],
            rows :tasks.map((el,i)=>{
            return{
                index:i+1,
                title:el.title,
                completed:el.completed?"true":"false",
               
                action:
                <div>
                 <button className="btn btn-danger rounded btn-sm"  onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?'))this.onDelete(el.id)}}>Delete</button>
              </div>
              }
            }) 
              }  



        return (
            <div className="container mt-5 pt-5">
               

<MDBDataTableV5 hover entriesOptions={[5, 20, 25,50,100,150,200,250]} entries={5} pagesAmount={4} data={data} searchTop searchBottom={false}  barReverse />
        <div className="row pb-3">
            <button className="border-0 rounded bg-primary p-3" onClick={this.toggle}>Add Task</button> 
            </div>        
        

            <Modal isOpen={modal}   toggle={this.toggle} >
        
        <ModalBody>
        <h3 className="text-primary"> Add New Task</h3>
            <div className="card mt-5 p-3">
               
            <div className="form-group ">
                <label>Title</label>
                <input type="text" className="form-control" name="title"   value={title} onChange={this.onHandleChange}/>
            </div> 
            <div className="form-group ">
                <label>Completion</label>
                <input type="boolean" className="form-control" name="completed"   value={completed} onChange={this.onHandleChange}/>
            </div> 
           
            </div>
                
        </ModalBody>
   
       <div className="row justify-content-center mt-3 mb-5 p-3"> 
       <button className="btn btn-danger btn-sm mr-3" onClick={this.addNewTask}>Submit</button>
       <button className="btn btn-warning btn-sm" onClick={this.onCancel} >Cancel</button>
    </div>

      </Modal>





            </div>
        )
    }
}


const mapStateToProps=state=>({
    task:state.task
})

export default connect(mapStateToProps,{onFetchTask,onDeleteTask})(withRouter(Tasks));

