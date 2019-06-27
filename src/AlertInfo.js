import React, { Component } from 'react';
import {Alert,AlertContainer} from 'react-bs-notifier';
import {connect} from 'react-redux';    
class AlertInfo extends Component {

    handleDismiss  = () => {
        this.props.alertOff();
    }

    render() {

        if(this.props.AlertShow===false) return null;
        return (
           <AlertContainer position="bottom-left">
               <Alert type={this.props.AlertType} timeout={1000} onDismiss={() => this.handleDismiss()}>
                   {this.props.AlertContent}
               </Alert>
               
           </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertType: state.AlertType,
        AlertContent : state.AlertContent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       alertOff: () => {
            dispatch({
              type : "ALERT_OFF"
            })
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
