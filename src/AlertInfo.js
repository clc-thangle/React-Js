import React, { Component } from 'react';
import {Alert,AlertContainer} from 'react-bs-notifier';
class AlertInfo extends Component {
    render() {
        return (
           <AlertContainer>
               <Alert type="info">Hello word</Alert>
               <Alert type="success">ok hi</Alert>
           </AlertContainer>
        );
    }
}

export default AlertInfo;