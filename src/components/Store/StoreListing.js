import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../actions/actions';
import {browserHistory} from 'react-router';

import store from '../../store';
class StoreListing extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!localStorage.getItem('session')) {
            browserHistory.push("/");
            return false;
        }
        this.props.dispatch(fetchStores());
    }
    
    render() {
        let { stores } = this.props;
        return (
            <div className="table-wrapper">
                <h2>Stores</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Store Name</th>
                            <th>slug</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.listStores()} */}
                        {stores.data && stores.data.length > 0 &&
                            stores.data.map((row, i) =>
                                <tr key={i}>
                                    <td>{row.id}</td>
                                    <td><a href={'store-details/'+row.id}> {row.name}</a></td>
                                    <td>{row.slug}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        stores: state.stores,
    };
};
export default connect(mapStateToProps)(StoreListing);