/** @format */
const jwt = require('jsonwebtoken');
exports.default = async function verifyauthentication(token, tokenRole) {
  //   let role;
  //   let username;
  try {
    const b1 = await jwt.verify(token, 'jwt_secret', (err, decoded) => {
      console.log('token : ' + decoded.data);
      //   username = decoded.data;
      console.log('username :' + decoded.data);
    });
    const b2 = await jwt.verify(
      tokenRole,
      'jwt_secret_role',
      (err, decoded) => {
        console.log('tokenRole : ' + decoded.dataRole);
        //   role = decoded.dataRole;
        //   console.log('role : ' + role);
      }
    );
    return b1 + b2;
  } catch (err) {
    return false;
  }
};
