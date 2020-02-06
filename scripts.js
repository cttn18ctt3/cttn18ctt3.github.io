
function doGet(e) {
    return handleResponse(e);
}

function getSize(sheet) {
    var output = {};

    output["size"] = sheet.getLastRow() - 1;


    return output;

}

function insertData(e, sheet) {
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var nextRow = sheet.getLastRow() + 1;

    var row = [];

    for (i in headers) {

        if (headers[i] == "id") {

            row.push(nextRow - 1);
            continue;
        }

        if (headers[i] == "username") {

            row.push(e.parameter["name"]);
            continue;
        }

        if (headers[i] == "Timestamp") {
            row.push(new Date());
            continue;
        }


        row.push(e.parameter[headers[i]]);

    }

    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    var output = {};

    output.row = nextRow;

    return output;

}

function getTable(sheet) {

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var nextRow = sheet.getLastRow() + 1;

    var size = sheet.getLastRow() - 1;

    var data = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    var table = [];

    var j;
    for (j = 0; i < size; j++) {

        var lineElements = data[i];

        var json = {};

        for (i in headers) {

            if (headers[i] == "username") {

                json["username"] = lineElements["name"];
                continue;
            }

            json[headers[i]] = lineElements[headers[i]];
        }

        table.push(json);
    }

    var output = {};

    output.table = table;
    return output;

}

var SHEET_NAME = "Sheet1";
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function handleResponse(e) {
    var lock = LockService.getPublicLock();
    lock.waitLock(30000);

    var output;

    try {
        var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
        var sheet = doc.getSheetByName(SHEET_NAME);
        //var headRow = e.parameter.header_row || 1;





        var flag = true;

        switch (e.parameter["cmd"]) {
            case "getSize": {
                output = getSize(sheet);
                break;
            }

            case "insertData": {
                output = insertData(e, sheet);
                break;
            }

            case "getTable": {
                output = getTable(sheet);
                break;
            }

            default: {
                flag = false;
                output = {};
                break;
            };
        }

        output.ver = 3;
        output.cmd = e.parameter["cmd"];

        if (flag) {
            output.result = "success";
        }
        else {
            output.result = "error";
            output.error = "Command not found!";
        }




    } catch (e) {

        output.result = "error";
        output.error = e;

    } finally {
        lock.releaseLock();
        return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
    }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}