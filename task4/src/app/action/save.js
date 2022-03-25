define([
    'model/ticketsRepository'
], function (ticketsRepo) {
    return function (id) {
        return function (ticket) {
            let viewUrl = location.href.split('/').slice(0,-1).join('/') + '/index.html';
            ticket.id = id;
            ticketsRepo.saveTicket(ticket);

            location.href = viewUrl;
        }
    }
});
