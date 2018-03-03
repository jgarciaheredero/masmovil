import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/api';
import PhoneItem from '../PhoneItem'
import { ViewComfy, ViewCompact } from 'material-ui-icons';
import LoadingComponent from '../LoadingComponent';
import ErrorComponent from '../ErrorComponent';

class PhoneListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modeView: true
        }
    }

    componentDidMount(){
        this.props.loadData();
    }

    toggleModelView = () => {
        this.setState({ modeView: !this.state.modeView })
    }

    renderButtonsModeView () {
        const styleButtonsModeView = {
            color: '#333',
            width: '4rem',
            height: 'auto'
        }

        return (
            <div>
                {   this.state.modeView === false ? 
                        <button title="Modo Cómodo" onClick={this.toggleModelView}><ViewComfy style={styleButtonsModeView}/></button>
                    :
                        <button title="Modo Compacto" onClick={this.toggleModelView}><ViewCompact style={styleButtonsModeView}/></button>
                }
            </div>
        );
    }

    render() {
        const { phones, loading, error } = this.props;
        return (
            <div className="container">
                { loading ? <LoadingComponent/> : error ? <ErrorComponent/>
                : 
                    <div>
                        <div className="optionsViewMode">
                        { this.renderButtonsModeView() }
                        </div>
                        <ul className={`phoneList ${this.state.modeView ? '': 'compact'}`}>
                            {
                                phones.map(phone => {
                                    return (
                                        <PhoneItem 
                                            key={phone.id}
                                            data = {phone}
                                            modeView={this.state.modeView}
                                        />)
                                })
                            }
                        </ul>
                    </div> 
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    loadData
}

const mapStateToProps = (state) => {
    return {
        phones: state.phoneListContainerReducer.phones,
        loading: state.phoneListContainerReducer.loading,
        error: state.phoneListContainerReducer.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);