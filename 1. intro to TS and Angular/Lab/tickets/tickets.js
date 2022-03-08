function ticketsList(tickets, criteria) {
    var result = [];
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var currentTicket = tickets_1[_i];
        // const ticketData: string[] = currentTicket.split('|');
        var _a = currentTicket.split('|'), dest = _a[0], price = _a[1], stat = _a[2];
        var ticket = new Ticket(dest, Number(price), stat);
        result.push(ticket);
    }
    switch (criteria) {
        case 'destination':
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(result);
}
ticketsList(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
