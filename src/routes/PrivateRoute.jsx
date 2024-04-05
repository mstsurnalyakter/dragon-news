import  { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if (user) {
        return children;

    }
  return <Navigate to={"/login"}></Navigate>
}

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute