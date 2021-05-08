/// <reference types="Cypress" />
const debug = require("debug");
const path = require("path");
const gmail_tester = require("gmail-tester");

module.exports = (on, config) => {
    on("before:browser:launch", (browser = {}, args) => {
        if (browser.name === "chrome") {
            args.push("--remote-debugging-port=9221");
            return args;
        }
    });
    on("task", {
        "gmail:get-messages": async args => {
            const messages = await gmail_tester.get_messages(
                path.resolve(__dirname, "credentials-gobrief001.json"),
                path.resolve(__dirname, "gmail_token.json"),
                args.options
            );
            return messages;
        }
    });
};