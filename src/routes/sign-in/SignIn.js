import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { setUserDetails, setCurrentUser } from 'actions/runtime';
import s from './SignIn.scss';

/* we can conntect to store as following */
@connect(
  store => ({
    registeredUsers: store.runtime.registeredUsers, // any specific store value can be accessed like this
  }),
  { setUserDetails, setCurrentUser }, // here we are binding the dispactcher action methods
)
class SignIn extends React.Component {
  static propTypes = {
    setUserDetails: PropTypes.func.isRequired,
    registeredUsers: PropTypes.object.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      signUpFields: {},
      signInFields: {},
      displayFieldsIn: [
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Password',
          value: 'password',
        },
      ],
      displayFieldsUp: [
        {
          label: 'Confirm Password',
          value: 'confirmPassword',
        },
        {
          label: 'Full Names',
          value: 'fullName',
        },
      ],
      errorFields: {},
    };
  }

  validateEmail = email => {
    const List = email.split('@');
    if (List.length > 1) {
      const tmpList = List[1].split('.');
      if (tmpList.length === 1) {
        return false;
      }
    } else {
      return false;
    }
    return true;
  };

  validateDetails = () => {
    const errorFields = {};
    const { signUpFields, signInFields } = this.state;
    const { registeredUsers } = this.props;
    // const users = registeredUsers.map(x => x.email);
    if (this.state.showSignUp && Object.keys(signUpFields).length === 4) {
      Object.keys(signUpFields).forEach(key => {
        if (
          key === 'email' &&
          (!this.validateEmail(signUpFields[key]) ||
            registeredUsers[signUpFields[key]])
        ) {
          errorFields[key] = registeredUsers[signUpFields[key]]
            ? 'User already registered with this email'
            : 'Invalid email';
        } else if (signUpFields[key].length === 0) {
          errorFields[key] = `${key} cannot be empty`;
        }
      });
      if (!signUpFields.password === signUpFields.confirmPassword) {
        errorFields.password = `confirm password and password should be equal`;
      }
      const errorFound = Object.keys(errorFields).length > 0;
      this.setState({
        errorFields,
        registeredSuccessfully: !errorFound,
      });
      if (!errorFound) {
        this.props.setUserDetails({
          name: 'registeredUsers',
          value: signUpFields,
        });
      }
    } else if (
      !this.state.showSignUp &&
      Object.keys(signInFields).length === 2
    ) {
      if (registeredUsers[signInFields.email]) {
        const user = registeredUsers[signInFields.email];
        if (user.password !== signInFields.password) {
          errorFields.password = `Incorrect password`;
        }
      } else {
        errorFields.email = `User not Registered`;
      }
      const errorFound = Object.keys(errorFields).length > 0;
      if (errorFound) {
        this.setState({ errorFields });
      } else {
        this.props.setCurrentUser({
          name: 'currentUser',
          value: signInFields,
        });
        this.context.history.push(`/feed`);
      }
    }
  };

  fillValues = (key, value) => {
    if (!this.state.showSignUp) {
      const { signInFields } = this.state;
      signInFields[key] = value;
      this.setState({ signInFields });
    } else {
      const { signUpFields } = this.state;
      signUpFields[key] = value;
      this.setState({ signUpFields });
    }
  };

  displayErrors = errorFields => {
    const div = (
      <div style={{ color: 'red' }}>
        {Object.values(errorFields).map(x => <div> {x} </div>)}
      </div>
    );
    return div;
  };

  displaySignUpContainer = () => {
    const {
      signUpFields,
      displayFieldsIn,
      displayFieldsUp,
      errorFields,
      registeredSuccessfully,
    } = this.state;
    const div = (
      <div className={s.mainContainer}>
        <div className={s.signIn}> Sign up </div>
        <div className={s.welcome}> Create Account for Camp K12 </div>
        <div className={s.inputBoxes}>
          {[...displayFieldsIn, ...displayFieldsUp].map(x => (
            <input
              className={s.input}
              value={signUpFields[x.value] || ''}
              type="text"
              placeHolder={x.label}
              onChange={e => {
                this.fillValues(x.value, e.target.value);
              }}
            />
          ))}
        </div>
        {registeredSuccessfully ? (
          <div style={{ color: 'blue' }}> User Registered Successfully </div>
        ) : (
          this.displayErrors(errorFields)
        )}
        <button
          className={s.sign}
          onClick={() => {
            this.validateDetails();
          }}
        >
          {' '}
          SIGN UP
        </button>

        <div className={s.noAccount}>
          Do you have account?{' '}
          <span
            className={s.signOut}
            role="presentation"
            onClick={() => {
              this.setState({
                showSignUp: false,
                signUpFields: {},
                errorFields: {},
              });
            }}
          >
            {' '}
            SIGN IN
          </span>
        </div>
      </div>
    );
    return div;
  };

  displaySignInContainer = () => {
    const { signInFields, displayFieldsIn, errorFields } = this.state;
    const div = (
      <div className={s.mainContainer}>
        <div className={s.signIn}> Sign in </div>
        <div className={s.welcome}> Welcome back </div>
        <div className={s.inputBoxes}>
          {displayFieldsIn.map(x => (
            <input
              className={s.input}
              value={signInFields[x.value] || ''}
              type="text"
              placeHolder={x.label}
              onChange={e => {
                this.fillValues(x.value, e.target.value);
              }}
            />
          ))}
        </div>
        <div className={s.forgot}> Forgot password? </div>
        {this.displayErrors(errorFields)}
        <button
          className={s.sign}
          onClick={() => {
            this.validateDetails();
          }}
        >
          {' '}
          SIGN IN
        </button>
        <div className={s.noAccount}>
          Don’t have an account?{' '}
          <span
            className={s.signOut}
            role="presentation"
            onClick={() => {
              this.setState({
                showSignUp: true,
                signInFields: {},
                errorFields: {},
              });
            }}
          >
            {' '}
            SIGN UP
          </span>
        </div>
      </div>
    );
    return div;
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.head}>
          <div className={s.time}> 9:21 </div>
          <div className={s.icons}>
            <i className="fa fa-wifi" />
            <i className="fa fa-battery-4" />
            <i className="fa fa-signal" />
          </div>
        </div>
        {!this.state.showSignUp
          ? this.displaySignInContainer()
          : this.displaySignUpContainer()}
      </div>
    );
  }
}

export default withStyles(s)(SignIn);
