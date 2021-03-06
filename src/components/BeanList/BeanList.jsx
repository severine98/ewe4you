import React, { Component } from 'react';
import styles from "./BeanList.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class BeanList extends Component {
  state = { 
    canEdit: this.props.canEdit,
    strFeeling: "",
   }

   toggleClick = (add, target) => {
     this.props.addFeeling(add, target);
   }

   handleInputChange = (value) => {
    this.props.onHandleChange(value)
   }

   enterPressed(event) {
    let code = event.keyCode || event.which;
    if(code === 13) {
      this.toggleClick(true)
    } 
}

  render() { 
    if(this.state.canEdit){
      return ( 
        <>
        <div className = {styles.feelingContainer}>
        <input type={'text'} placeholder={"Add a feeling"} max={30} value={this.props.inputText} onChange={e => this.handleInputChange(e.target.value)} onKeyPress={this.enterPressed.bind(this)}></input>
          <span onClick={() => this.toggleClick(true)}><FontAwesomeIcon icon="plus" className={styles.faPlus} /></span>
        </div>
        </>
       );
    }else {
      return ( 
        <>
        <div className = {styles.feelingContainer}>
          <p>{this.props.strFeeling}</p> 
          <span onClick={(e) => this.toggleClick(false, this.props.index)}><FontAwesomeIcon icon="minus" className={styles.faMinus} /></span>
        </div>
        </>
       );
    }

  }
}
 
export default BeanList;