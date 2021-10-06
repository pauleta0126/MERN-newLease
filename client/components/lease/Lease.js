import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom';
import { Row } from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import LeaseDataListView from './LeaseDataListView';

class Lease extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="mb-2">
                            <h1>Lease List</h1>
                            <div className="text-zero top-right-button-container">
                                <NavLink to="/app/lease/add" className="top-right-button btn btn-primary btn-lg">New Lease</NavLink>
                            </div>
                        </div>
                    </Colxx>
                </Row>
                <LeaseDataListView />
            </Fragment>
        );
    }
}

export default Lease;