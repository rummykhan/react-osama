import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCities, fetchCountries, fetchStates, updateName, createStore, checkSession} from '../../actions/actions'
import {browserHistory} from 'react-router';

import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

class CreateStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            slug: '',
            street_address: '',
            phone_number_1: '',
            phone_number_2: '',
            country_id: '',
            city_id: '',
            state_id: '',
            postal_code: '',
            cities: props.citiesSuccess,
            form: {
                name: props.name
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('session')) {
            browserHistory.push("/");
            return false;
        }
        this.props.dispatch(fetchCountries());
        this.props.dispatch(fetchCities());
        this.props.dispatch(fetchStates());


    }

    componentWillReceiveProps(nextProps) {
        const {form} = this.state;
        form.name = nextProps.name;
        this.setState({form})
    }

    onChangeName() {
        this.props.dispatch(updateName('Rehan Manzoor'))
    }

    render() {
        return (
            <form className="create-store-form" onSubmit={this.onSubmit}>
                {/*<button type="button" onClick={this.onChangeName.bind(this)}>Change Name</button>*/}
                {/*<br/>*/}
                {/*<h4>{this.state.form.name}</h4>*/}
                <h2>Create Store</h2>
                <div className="form-group row">
                    <label htmlFor="name" className="col-2 col-form-label">Store name</label>
                    <div className="col-6">
                        <input className="form-control" name="name" type="text" required value={this.state.name}
                               onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="slug" className="col-2 col-form-label">Store Slug</label>
                    <div className="col-6">
                        <input className="form-control" name="slug" type="text" required value={this.state.slug}
                               onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="exampleInputEmail1" className="col-2 col-form-label">Store address</label>
                    <div className="col-6">
                    <textarea className="form-control" name="street_address" required value={this.state.street_address}
                              onChange={this.onChange}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone_number_1" className="col-2 col-form-label">Store Phone Number 1</label>
                    <div className="col-6">
                        <input className="form-control" name="phone_number_1" type="number" required
                               value={this.state.phone_number_1} onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone_number_2" className="col-2 col-form-label">Store Phone Number 2
                        (optional)</label>
                    <div className="col-6">
                        <input className="form-control" name="phone_number_2" type="number"
                               value={this.state.phone_number_2}
                               onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="country" className="col-2 col-form-label">Country</label>
                    <div className="col-6">
                        <Select
                            name="country_id"
                            value={this.state.country_id}
                            options={this.props.countriesSuccess}
                            onChange={this.countryChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="country" className="col-2 col-form-label">City</label>
                    <div className="col-6">
                        <Select
                            name="city_id"
                            value={this.state.city_id}
                            options={this.props.citiesSuccess}
                            onChange={this.cityChange}

                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="country" className="col-2 col-form-label">State</label>
                    <div className="col-6">
                        <Select
                            name="state_id"
                            value={this.state.state_id}
                            options={this.props.states}
                            onChange={this.stateChange}

                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-2 col-form-label">Postal Code</label>
                    <div className="col-6">
                        <input className="form-control" name="postal_code" type="text" required
                               value={this.state.postal_code}
                               onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-2">
                    </div>
                    <div className="col-6">
                        <button className="form-control">Submit</button>
                    </div>
                </div>
            </form>
        );
    }

    countryChange = (val) => {
        this.setState({
            country_id: val.value
        })
    }
    cityChange = (val) => {
        this.setState({
            city_id: val.value
        })
    }
    stateChange = (val) => {
        this.setState({
            state_id: val.value
        })
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.dispatch(createStore(this.state));
    }
}

const mapStateToProps = (state) => {
    return {
        countriesError: state.countriesError,
        countriesSuccess: state.countriesSuccess,
        citiesSuccess: state.citiesSuccess,
        states: state.states,
        name: state.name
    };
};

export default connect(mapStateToProps,)(CreateStore);