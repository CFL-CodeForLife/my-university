import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Courses.css';

class CourseCardLink extends React.Component{
  render() {
    return (
    <div className="CourseCardLink one-link hero-btn gray-btn">
      <a href={this.props.contant.url} target="_blank">
      <i className={`fa fa-${this.props.contant.platform}`}></i>
      {this.props.contant.platform} {(this.props.contant.note===null || this.props.contant.note===undefined || this.props.contant.note==='') ? "" : "(" + this.props.contant.note + ")"}</a>
    </div>
  );}
}
class CourseCardLinks extends React.Component{
  render() {
    if(this.props.contant.length===0){
      return(
        <div className="CourseCardLinks">
          <p>No data available.</p>
        </div>
      )
    }
    return (
    <div className="CourseCardLinks">
      {this.props.contant.map((link,i)=>{ return ( <CourseCardLink key={i} contant={link}/>) })}
    </div>
  );}
}
class CourseCard extends React.Component{
  render() {
    if(this.props.contant.hidden === true){
      return ('');
    }
    return (
    <div className="CourseCard">
      <h3>{this.props.contant.code}{(this.props.contant.name===undefined) ? "" : ": " + this.props.contant.name}</h3>
      <CourseCardLinks contant={this.props.contant.url}/>
    </div>
  );}
}
class Courses extends React.Component{
  state = {
    loading: true,
    data: null
  };
  async componentDidMount(){
    const res = await (await fetch(`https://must-server.herokuapp.com/api/MUST/IT/courses-list?filtered=true`)).json();
    this.setState({data: res.links, loading:false})
  }
  render(){
      return (
        <div className="courses">
          <h1>Course Groups Links</h1>
          <p> Courses & community groups for Misr University for Science and Technology. </p>
          {/* <h1>page 2.0</h1> */}
          <div className="courses-container container-3">
            {this.state.loading? (
              <div>Loading...</div>
            ):(
              this.state.data.map((course)=>{
                 return (<CourseCard  key={course.code} contant={course}/>)
              })
            )}
          </div>
        </div>
    );
  }
}

export default Courses;