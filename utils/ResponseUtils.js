
exports.createSuccessResponse = function (result_code, result_message, result) {
    var response = {
        success: true,
        result_code: result_code,
        result_message: result_message,
        result: result,
    }
    return response
}

exports.CreateFaildResponse = function (result_code, result_message, result) {
    var response = {
        success: false,
        result_code: result_code,
        result_message: result_message,
        result: ((result === null) ? "faild" :(result == [])?[] :result),
    }
    return response
}

exports.internalServerError = function (res, error) {
    res.status(503).send(error).end();
    const util = require('util');
    const colors = require('colors');
    console.log(colors.red(error));

    const dateTime = new Date();
    const error_template = `in ${dateTime.getDate()} at ${dateTime.getHours()}:${dateTime.getMinutes()} internal server erro occured-------------------------------------
     \n${util.inspect(error)}\n
     -----------------------------------------------------------------------------`;
    const fs = require('fs');
    fs.appendFile("C:/xampp/htdocs/panjool/logs/internal_server_error.txt", error_template, function (err) {
        if (err) {
            console.log(colors.red(`error occured in write file: ${err}`))
        }
    });
}

exports.internalServerError2 = function (error) {
    const util = require('util');
    const colors = require('colors');
    console.log(colors.red('internal server error'));
    const dateTime = new Date();
    const error_template = `in ${dateTime.getDate()} at ${dateTime.getHours()}:${dateTime.getMinutes()} internal server erro occured-------------------------------------
     \n${error}\n${util.inspect(error)}\n`;
    const fs = require('fs')
    fs.appendFile("/var/panjool_server/logs/internal_server_error.txt", error_template, 'utf-8', function (err) {
        if (err) {
            console.log(colors.red(`error occured in write file: ${err}`))
        }

    });
}


exports.sendResponse = function (res, response) {
    res.send(response)
    res.end()
}