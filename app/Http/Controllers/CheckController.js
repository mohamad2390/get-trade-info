const responseUtils = require('../../../utils/ResponseUtils')
const validation = require('../../../utils/validation')
//___________________________________________
exports.check = async (req, res) => {
    const positionInfo = req.body;
    try {
        
        console.log(positionInfo)
        var text = positionInfo.text+"\n"
        const fs = require('fs');
    fs.appendFile("F:/New folder(4)/server/get-trade-info/internal_server_info.txt", text, function (err) {
        if (err) {
            console.log(111111111)
        }
    });
    res.status(200).send('ok').end();
        
    } catch (error) {
        console.log(error)
    }
}