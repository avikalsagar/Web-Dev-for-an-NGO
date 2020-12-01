import React, { Component } from "react";
class Crowdfunding extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         campaigns: [
            { Org: 'Keto', Name: 'Shravan', Reason: 'Help Shravan take care of 200+ abandoned animals', Link: <a href="https://www.ketto.org/fundraiser/SupportShravan?payment=form">https://www.ketto.org/fundraiser/SupportShravan?payment=form</a> },
            { Org: 'Keto', Name: 'Guneet', Reason: 'Help raise funds for Mumbais community kitchens', Link: <a href="https://www.ketto.org/fundraiser/GuneetMongaforcommunitykitchens?payment=form">https://www.ketto.org/fundraiser/GuneetMongaforcommunitykitchens?payment=form</a> },
            { Org: 'Milaap', Name: 'Karthik', Reason: 'Help save life of a cancer patient', Link: <a href="https://milaap.org/fundraisers/support-karthik-76">https://milaap.org/fundraisers/support-karthik-76</a> },
            { Org: 'Milaap', Name: 'Zameer', Reason: 'Help save the life of a severly injured 10 year old kid', Link: <a href=" https://milaap.org/fundraisers/support-zameer-4"> https://milaap.org/fundraisers/support-zameer-4</a> }
         ]
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>Ongoing Campaigns</h1>
         </div>
      )
   }

   renderTableData() {
      return this.state.campaigns.map((campaign, index) => {
         const { Org, Name, Reason, Link } = campaign //destructuring
         return (
            <tr key={Org}>
               <td>{Org}</td>
               <td>{Name}</td>
               <td>{Reason}</td>
               <td>{Link}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Ongoing Campaigns</h1>
            <table id='campaigns'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }

   renderTableHeader() {
      let header = Object.keys(this.state.campaigns[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Ongoing Campaigns</h1>
            <table id='campaigns'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}



  export default Crowdfunding;