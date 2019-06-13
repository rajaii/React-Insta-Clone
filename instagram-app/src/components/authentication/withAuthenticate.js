import React from 'react';
/*
const withAuthenticate = WrappedComponent => WrappedComponent2 =>  {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <WrappedComponent data={this.props.data} newData={this.props.newData} handleSearch={this.props.handleSearch}/>
        }
    }
}
*/



const withAuthenticate = WrappedComponent => WrappedComponent2 =>  {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: '',
                password: '',
                isLoggedIn: '',
            }
        }

        login = (e) => {
            e.preventDefault();
            localStorage.setItem('user', this.state.user);
            const disValue = () =>  !this.state.isLoggedIn ? true : false;
            this.setState({
                isLoggedIn: disValue()
            })
        }

        handleChangeU = (e) => {
            this.setState({
                user: e.target.value
            })
        }
        handleChangeP = (e) => {
            this.setState({
                password: e.target.value
            })
        }

        

        render() {
            if (this.state.isLoggedIn) {
                return <WrappedComponent data={this.props.data} newData={this.props.newData} handleSearch={this.props.handleSearch}/>
            } else {
                return <WrappedComponent2 handleChangeU={this.handleChangeU} login={this.login} handleChangeP={this.handleChangeP} user={this.state.user} password={this.state.password}/>
            }
        }
    }
}






export default withAuthenticate;