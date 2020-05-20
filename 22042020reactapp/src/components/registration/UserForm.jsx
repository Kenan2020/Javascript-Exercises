import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails.jsx"
import FormPersonalDetails from "./FormPersonalDetails.jsx"
import Confirm from "./Confirm.jsx"
import Success from "./Success.jsx"

class UserForm extends Component {
    state={
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }
    //Procced to next step
    nextStep = ()=>{
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }
    //Go back to prev step
    prevStep = ()=>{
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }
    //Handle fields change
    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        })
    }
    // handleChange = input =>{
    //     return e=>{
    //         this.setState({
    //             [input]: e.target.value
    //         })
    //     }
    // }
    render() {
        const {step} = this.state
        const {firstName, lastName, email, occupation, city, bio} = this.state
        const values = {firstName, lastName, email, occupation, city, bio}
        switch(step){
            case 1:
                return(//<h1>Enter Your User Details</h1>
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    )
            case 2:
                return(//<h1>Enter Your Personal Details</h1>
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    )
            case 3:
                return(//<h1>Confirm Your Details</h1>
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                    )
            case 4:
                return(//<h1>Your are Successfull Details</h1>
                    <Success />
                    )
        }
    }
}

export default UserForm
