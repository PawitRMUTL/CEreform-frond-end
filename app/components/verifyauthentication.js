/** @format */
const jwt = require('jsonwebtoken');
exports.default = async function verifyauthentication(username, tokenRole) {
  try {
    const secret = jwt.verify(username, 'jwt_secret', (err, decoded) => {
      console.log('token : ' + decoded.data);
      //   username = decoded.data;
      console.log('username :' + decoded.data);
    });
    const secretrole = jwt.verify(tokenRole, 'jwt_secret_role', (err, decoded) => {
      console.log('tokenRole : ' + decoded.dataRole);
      //   role = decoded.dataRole;
      //   console.log('role : ' + role);
    });
    return secret + secretrole;
  } catch (err) {
    return false;
  }
};
