define([
    'model/ticketsRepository'
], function (ticketsRepo) {
    return function (id) {
        return function () {
            let viewUrl = location.href.split('/').slice(0,-1).join('/') + '/index.html';
            ticketsRepo.deleteTicket(id);

            location.href = viewUrl;
        }
    }
});
