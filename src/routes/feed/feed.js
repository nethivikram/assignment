import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { setUserDetails, setCurrentUser } from 'actions/runtime';
import s from './feed.css';

/* we can conntect to store as following */
@connect(
  store => ({
    registeredUsers: store.runtime.registeredUsers, // any specific store value can be accessed like this
    currentUser: store.runtime.currentUser,
  }),
  { setUserDetails, setCurrentUser }, // here we are binding the dispactcher action methods
)
class Feed extends React.Component {
  static propTypes = {
    setUserDetails: PropTypes.func.isRequired,
    registeredUsers: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }

  componentDidMount() {
    if (!this.props.currentUser) {
      this.context.history.push(`/`);
    }
    this.getFeed();
  }

  getFeed = user => {
    const users = this.props.registeredUsers;
    if (user) {
      users[user.email] = user;
    }
    const feed = Object.values(users).filter(x => x.feed);
    this.setState({ feed });
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
        <div className={s.feedContainer}>
          <div className={s.feedLog}>
            <div> Your Feed</div>{' '}
            <div
              className={s.logOut}
              role="presentation"
              onClick={() => {
                this.props.setCurrentUser({
                  name: 'currentUser',
                  value: null,
                });
                this.context.history.push(`/`);
              }}
            >
              {' '}
              LOGOUT{' '}
            </div>{' '}
          </div>
          <div className={s.inputFeed}>
            <textArea
              ref={ref => {
                this.inputRef = ref;
              }}
              placeHolder="Write a post.."
            />
            <button
              className={s.sign}
              onClick={() => {
                if (this.inputRef.value) {
                  const user = this.props.registeredUsers[
                    this.props.currentUser.email
                  ];
                  user.feed = this.inputRef.value;
                  this.props.setUserDetails({
                    name: 'registeredUsers',
                    value: user,
                  });
                  this.getFeed(user);
                }
              }}
            >
              {' '}
              POST
            </button>
          </div>
        </div>
        <div className={s.container}>
          {this.state.feed.length
            ? this.state.feed.map(x => (
                <div className={s.userCard}>
                  <div className={s.userDetails}>
                    <div className={s.userPhoto} />
                    <div className={s.details}>
                      <div className={s.name}>
                        {' '}
                        <div>{x.fullName}</div>{' '}
                        <div className={s.day}> 5d </div>
                      </div>
                      <div className={s.badges}>
                        {' '}
                        <div className={s.gren} /> 200
                        <div className={s.red} /> 340
                      </div>
                    </div>
                  </div>
                  <div className={s.userFeed}>{x.feed}</div>
                </div>
              ))
            : null}
          {this.state.feed.length === 0 ? (
            <div> No user feed found. please post your feed </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feed);
