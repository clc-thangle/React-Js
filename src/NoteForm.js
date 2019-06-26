import React, { Component } from 'react';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:''
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value; 
        this.setState({
            [name]:value
        });
    }

    addData  = (title,content) => {
        var item = {};
        item.noteTitle=title;
        item.noteContent=content;
        // gui item len app de app xu li
        this.props.getData(item);
        alert('them du lieu ' + JSON.stringify(item)+ "thanh cong");
    }

    render() {
        return (
            <div className="col-4">
                <h3>EDIT CONTENT NOTE</h3>
                <form>
                <div className="form-group">
                    <label htmlFor="title">Note's title</label>
                    <input type="text" onChange={(event)=> this.isChange(event)} className="form-control" name="title" id="title" aria-describedby="helpIdTitle"  />
                    <small id="helpIdTitle" className="form-text text-muted">Điền tiêu đề dô đaiz</small>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Note's content</label>
                    <textarea  onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="content" id="content" aria-describedby="helpIdContent" defaultValue={""} />
                    <small id="helpIdContent" className="form-text text-muted">Điền nội dung dô đaiz nữa nè </small>
                </div>
                <button type="reset" onClick={() => this.addData(this.state.title, this.state.content)}  className="btn btn-primary btn-block">Lưu</button></form>
    
            </div>
        );
    }
}

export default NoteForm;