import React, { Component } from 'react';
import SoldierService from '../service/SoldierService';

class ListSoldier extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                soldiers:[] 
          }
          this.addSoldier=this.addSoldier.bind(this);
          this.editSoldier=this.editSoldier.bind(this);
          this.deleteSoldier=this.deleteSoldier.bind(this);
          this.viewSoldier=this.viewSoldier.bind(this);
      }
    
     componentDidMount() {
         SoldierService.getSoldiers().then((res) => {
             this.setState({soldiers:res.data});
         });
     }
     
     addSoldier()
     {
        
        this.props.history.push('/add-soldier');
     }

     editSoldier(id)
     {
        this.props.history.push(`/update-soldier/${id}`);
        
     }

     deleteSoldier(id)
     {
        this.props.history.push(`/delete-soldier/${id}`);
        // StudentService.deleteStudent(id).then(res => {
        //     this.setState({
        //          student: this.state.students.filter(student => student.id !== id)
        //     })
        // })
        
     }

     viewSoldier(id)
     {
        this.props.history.push(`/view-soldier/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Soldiers List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addSoldier}> Add Soldier</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Soldier Id</th>
                                <th>Soldier firstname</th>
                                <th>Soldier lastname</th>
                                <th>Soldier Rank</th>
                                <th>Soldier Skill</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.soldiers.map(
                                    soldier =>
                                     <tr key={soldier.id}>
                                         <td>{soldier.id}</td>
                                         <td>{soldier.firstname}</td>
                                         <td>{soldier.lastname}</td>
                                         <td>{soldier.rank}</td>
                                         <td>{soldier.skill}</td>
                                         <td>
                                            <button onClick={() =>this.editSoldier(soldier.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteSoldier(soldier.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewSoldier(soldier.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListSoldier;