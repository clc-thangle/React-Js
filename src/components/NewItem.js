import React, { Component } from 'react';

class NewItem extends Component {
    render() {
        return (
            <div className="col-4">
                                    <div className="card-deck">
                                        <div className="card">
                                            <a href="/tin-chi-tiet"><img src={this.props.anh} alt="for react router" className="img-fluid" /></a>

                                                <h4 className="card-title">{this.props.tieuDe}</h4>
                                                <p>{this.props.trichDan}</p>
                                            
                                        </div>
                                    </div>
                                    <hr />
                                </div>
        );
    }
}

export default NewItem;