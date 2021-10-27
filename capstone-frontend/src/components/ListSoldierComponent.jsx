import React, { Component } from 'react'
import SoldierService from '../service/SoldierService'

export default class ListSoldierComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            soldier: []
        }
    }
  
    componentDidMount(){
        SoldierService.getSoldier().then((res)=>{
            this.setState({soldier:res.data})
        })
    }
        render() {
            return (
                <div>
                    <h2 className="text-center">Soldiers List</h2>
                    <div className ="row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Soldier First Name </th>
                                    <th>Soldier Last Name </th>
                                    <th>Soldier Rank </th>
                                    <th>Skill</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.soldier.map(
                                        soldier => 
                                        <tr key = {soldier.id}>
                                            <td> {soldier.firstName} </td>
                                            <td> {soldier.lastName}</td>
                                            <td> {soldier.rank}</td>
                                            <td> {soldier.skill}</td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                
                </div>
        )
    }
}
