/**
 * Import node modules
 */

const colors = require('colors');

module.exports = class Utils {
    constructor() {
        this.name = "Utils";
    }

    /**
     * Logger for debug
     * @param {string} message
     * @param {string} type
     * @returns {void}
     */
    logger = (message, type = "log") => {
        const date = new Date();

        const dateDay = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
        const dateMonth = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);

        const dateTime = `${dateDay}-${dateMonth}-${date.getFullYear()} ` +
            `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        switch (type) {
            case "log":
                return console.log(
                    `[${dateTime.grey}] : [${type.toUpperCase().bgBlue}] ➜  ${message}`
                );

            case "debug":
                return console.log(
                    `[${dateTime.grey}] : [${type.toUpperCase().bgYellow}] ➜  ${message}`
                );
            case "ready":
                return console.log(
                    `[${dateTime.grey}] : [${type.toUpperCase().bgGreen}] ➜  ${message}`
                );
            case "error":
                return console.log(
                    `[${dateTime.grey}] : [${type.toUpperCase().bgRed}] ➜  ${message}`
                );
            case "cmd":
                return console.log(
                    `[${dateTime.grey}] : [${type.toUpperCase().bgWhite}] ➜  ${message}`
                );
            default:
                throw new TypeError(
                    "Le type de log doit être soit debug, log, ready, cmd ou error."
                );
        }
    }
}