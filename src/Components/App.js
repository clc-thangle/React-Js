import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search/>
                            <TableData/>
                            <AddUser/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;