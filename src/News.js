import React, { Component } from 'react';
import { connect } from 'react-redux';  
class News extends Component {

    // userEditStatusInStore  = () => {
    //     var dispatch = this.props.dispatch;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }

    render() {
        return (
            <div>
                <h2>day la component new</h2>  
                <button onClick={() => this.userEditStatusInStore()}>Click di</button> 
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News)
       