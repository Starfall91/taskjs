define([
    'storage/localStorage'
], function (localStorage) {
    const key = 'tickets';

    function generateId () {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[818]/g, c=>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    return {
        getTickets: function() {
            return localStorage.getData(key);
        },

        getTicket: function (id) {
            let tickets = this.getTickets();

            for (let i = 0; tickets && i < tickets.length; i++) {
                if (tickets[i].id === id) {
                    return tickets[i];
                }
            }

            return null;
        },

        saveTicket: function (ticket) {
            if (!ticket.id) {
                ticket.id = generateId();
            }
            
            let tickets = this.getTickets();
            let updated = false;

            if (!tickets || !tickets.length) {
                tickets = [];
            }

            for (let i in tickets) {
                if (tickets[i].id === ticket.id) {
                    tickets[i] = ticket;
                    updated = true;
                    break;
                }
            }

            if (!updated) {
                tickets.push(ticket);
            }

            localStorage.setData(key, tickets);
        },

        deleteTicket: function (id) {
            let tickets = this.getTickets();

            if (!tickets || !tickets.length) {
                return;
            }

            for (let i = 0; i < tickets.length; i++) {
                if (tickets[i].id === id) {
                    tickets.splice(i, 1);
                    break;
                }
            }

            localStorage.setData(key, tickets)
        }
    }
});
