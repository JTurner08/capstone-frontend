import React, { Component } from 'react'
import SoldierService from '../services/SoldierService'

class UpdateSoldier extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            rank: '',
            skill: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.UpdateSoldier = this.UpdateSoldier.bind(this);
        this.UpdateSoldier = this.updateSoldier.bind(this);
    }

    componentDidMount(){
        SoldierService.getSoldierById(this.state.id).then( (res) =>{
            let soldier = res.data;
            this.setState({firstName: employee.firstName,
                lastName: soldier.lastName,
                rank : soldier.emailId
            });
        });
    }

    updateSoldier = (e) => {
        e.preventDefault();
        let soldier = {firstName: this.state.firstName, lastName: this.state.lastName, rank: this.state.rank, skill: this.state.skill};
        console.log('soldier => ' + JSON.stringify(soldier));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateSoldier(employee, this.state.id).then( res => {
            this.props.history.push('/soldiers');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeRankHandler= (event) => {
        this.setState({rank: event.target.value});
    }

    changeSkillHandler= (event) => {
        this.setState({skill: event.target.value});
    }

    cancel(){
        this.props.history.push('/soldiers');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Soldier</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rank: </label>
                                            <input placeholder="Rank" name="rank" className="form-control" 
                                                value={this.state.rank} onChange={this.changeRankHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateSoldier}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateSoldier;