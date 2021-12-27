import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return rest.authentication !== '' ? (
          children
        ) : (
          <Redirect 
          to={{
            pathname: '/login', 
            state: { from: location }}}
          />
        );
      }}
    />
  );
}


function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps)(PrivateRoute);
