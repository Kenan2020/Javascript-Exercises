import React, { Component } from 'react'

class Table extends Component {
    render() {
        let newDate = new Date()
        const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let firstDay = new Date(this.props.Values.year, this.props.Values.month).getDay() // return the first day of this month [0-6]
        
        const getDaysInMonth = function (date) { // return how many days in this month
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        }
        let monthDays = getDaysInMonth(new Date(this.props.Values.year, this.props.Values.month));
        console.log(this.props.Values.year)
        return (

            <table className="table table-bordered">
                <caption style={{captionSide: "top"}}>{m[this.props.Values.month]} {this.props.Values.year}</caption>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    
                </tbody>
            </table>
        )
    }
}

export default Table
