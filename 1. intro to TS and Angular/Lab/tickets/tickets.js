var solve = function (arr, criteria) {
    var ticketArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        var _a = el.split('|'), dest = _a[0], price = _a[1], status_1 = _a[2];
        ticketArr.push({
            Ticket: {
                destination: dest,
                price: price,
                status: status_1
            }
        });
    }
    console.log(ticketArr);
};
solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
