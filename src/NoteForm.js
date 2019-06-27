import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:'',
            key:''
        }
    }
    
    
    componentWillMount() {
         if(this.props.editItem) {// truong hop sua
             this.setState({
                 noteTitle:this.props.editItem.noteTitle,
                 noteContent:this.props.editItem.noteContent,
                 key:this.props.editItem.key
             });
         }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value; 
        this.setState({
            [name]:value
        })
    }

    addData  = (title,content) => {
        if(this.state.key)
        {
            var editObject ={};
            editObject.key=this.state.key;
            editObject.noteContent=this.state.noteContent;
            editObject.noteTitle=this.state.noteTitle
            this.props.editDataStore(editObject);
            console.log("dang sua du lieu");
        }
        else {
            var item = {};
            item.noteTitle=title;
            item.noteContent=content;
            // // gui item len app de app xu li
            // this.props.getData(item);
            // alert('them du lieu ' + JSON.stringify(item)+ "thanh cong");
    
            // item = JSON.stringify(item);
            this.props.addDataStore(item);// su dung reducer trong store , // dispatch ADD_DATA
        }

        
    }

    render() {
        return (
            <div className="col-4">
                <h3>EDIT CONTENT NOTE</h3>
                <form>
                <div className="form-group">
                    <label htmlFor="title">Note's title</label>
                    <input defaultValue={this.props.editItem.noteTitle} type="text" onChange={(event)=> this.isChange(event)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdTitle"  />
                    <small id="helpIdTitle" className="form-text text-muted">Điền tiêu đề dô đaiz</small>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Note's content</label>
                    <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdContent"/>
                    <small id="helpIdContent" className="form-text text-muted">Điền nội dung dô đaiz nữa nè </small>
                </div>
                <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)}  className="btn btn-primary btn-block">Lưu</button></form>
    
            </div>
        );
    }
}
// props.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);