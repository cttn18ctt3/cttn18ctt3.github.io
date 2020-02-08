function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": "This app do not accept GET http request!" })).setMimeType(ContentService.MimeType.JSON);
}

function uploadFileToGoogleDrive(data, filename, parent) {

    var output = {};

    try {

        var dropbox = "CTTN18CTT3/Images";
        var folder, folders = DriveApp.getFoldersByName(dropbox);

        if (folders.hasNext()) {
            folder = folders.next();
        } else {
            folder = DriveApp.createFolder(dropbox);
        }

        var contentType = data.substring(5, data.indexOf(';')),
            bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,') + 7)),
            blob = Utilities.newBlob(bytes, contentType, filename);

        var file = folder.createFolder(parent).createFile(blob);

        var fileId = file.getId();

        file.rename(fileId);


        output.id = fileId;

        return output;

    } catch (f) {
        throw f;
    }

}

function doPost(e) {

    return handleResponse(e);
}

function handleResponse(e) {
    var lock = LockService.getPublicLock();
    lock.waitLock(30000);

    var output;

    try {
        var flag = true;

        switch (e.parameter["cmd"]) {
            case "uploadImage": {
                output = uploadFileToGoogleDrive(e.parameter.data, e.parameter.name, e.parameter.name);
                break;
            }

            default: {
                flag = false;
                output = {};
                break;
            };
        }

        output.ver = 1;
        output.cmd = e.parameter["cmd"];

        if (flag) {

            if (output.result != "error") {
                output.result = "success";
            }

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