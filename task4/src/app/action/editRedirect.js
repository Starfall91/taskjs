define([
    'model/context'
], function (context) {
    return function (ticket) {
        return function () {
            let editUrl = location.href.split('/').slice(0,-1).join('/') + '/edit.html';
            context.setContext(ticket);

            location.href = editUrl;
        }
    }
});
