import React, { Component } from 'react'
import SoldierService from '../service/SoldierService'

class ViewSoldier extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            soldier: {}
        }
    }

    componentDidMount(){
        SoldierService.getSoldierById(this.state.id).then( res => {
            this.setState({soldier: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Soldier Details</h3>
                    <div className = "card-body">
                        <div classfirstname = "row">
                            <label> Soldier first name: </label>
                            <div> { this.state.soldier.firstname }</div>
                        </div>
                        
                        <div classfirstname = "row">
                            <label> Soldier last name: </label>
                            <div> { this.state.soldier.lastname }</div>
                        </div>
                       
                        <div className = "row">
                            <label> Soldier Rank: </label>
                            <div> { this.state.soldier.rank }</div>
                        </div>
                        <div className = "row">
                            <label> Soldier Skill: </label>
                            <div> { this.state.soldier.skill }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSoldier;