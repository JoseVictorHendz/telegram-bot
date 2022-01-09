const packageJson = require('../../package.json');


exports.test = async (request, res) => {
    res.json({value:`${packageJson.name} working test`});
};
  