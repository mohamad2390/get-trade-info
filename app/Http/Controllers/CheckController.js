const responseUtils = require('../../../utils/ResponseUtils')
const validation = require('../../../utils/validation')
//___________________________________________
exports.check = async (req, res) => {
    const positionInfo = req.body;
    try {
        
        var text = positionInfo.text+"\n"
        const fs = require('fs');
    // fs.appendFile("internal_server_info.txt", text, function (err) {
    //     if (err) {
    //         console.log(111111111)
    //     }
    // });
    fs.writeFile("internal_server_info.txt", text, function(){console.log('done')})
    res.status(200).send('ok').end();
        
    } catch (error) {
        console.log(error)
    }
}