import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStore} from '../../actions/actions'
import 'react-select/dist/react-select.css';
import {browserHistory} from 'react-router';

class StoreDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!localStorage.getItem('session')) {
            browserHistory.push("/");
            return false;
        }
        this.props.dispatch(getStore(this.props.params.number));
    }

    render() {
        return (
            <div className="table-wrapper">
                <h2>Store Details</h2>
                <table className="table">
                    {this.props.storeDetail &&
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{this.props.storeDetail.name}</td>
                    </tr>
                    <tr>
                        <td>Approved</td>
                        <td>{this.props.storeDetail.approved ? 'Approved' : 'Pending Approval'}</td>
                    </tr>
                    {this.props.storeDetail.profiles &&
                    <tr>
                        <td>Country</td>
                        <td>{this.props.storeDetail.profiles[0].countries.name}</td>
                    </tr>
                    }
                    {this.props.storeDetail.profiles &&
                    <tr>
                        <td>Address</td>
                        <td>{this.props.storeDetail.profiles[0].street_address}</td>
                    </tr>
                    }
                    {this.props.storeDetail.profiles &&
                    <tr>
                        <td>Phone Number 1</td>
                        <td>{this.props.storeDetail.profiles[0].phone_number_1}</td>
                    </tr>
                    }
                    {this.props.storeDetail.profiles && this.props.storeDetail.profiles[0].phone_number_2 &&
                    <tr>
                        <td>Phone Number 1</td>
                        <td>{this.props.storeDetail.profiles[0].phone_number_2}</td>
                    </tr>
                    }
                    {this.props.storeDetail.profiles &&
                    <tr>
                        <td>Postal Code</td>
                        <td>{this.props.storeDetail.profiles[0].postal_code}</td>
                    </tr>
                    }
                    </tbody>
                    }

                </table>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    if (state.storeDetail.profiles)
        console.log(state.storeDetail.profiles[0].countries.name);
    return {
        storeDetail: state.storeDetail,
    };
};

export default connect(mapStateToProp)(StoreDetails);