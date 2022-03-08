function ticketsList(tickets: string[], criteria: string) {

    const result: Ticket[] = [];

    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let currentTicket of tickets) {
        // const ticketData: string[] = currentTicket.split('|');
        let [dest, price, stat]: string[] = currentTicket.split('|');
        const ticket = new Ticket(dest, Number(price), stat);
        result.push(ticket);
    }

    switch (criteria) {
        case 'destination':
            result.sort((a: Ticket, b: Ticket) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a: Ticket, b: Ticket) => a.price - b.price);
            break;
        case 'status':
            result.sort((a: Ticket, b: Ticket) => a.status.localeCompare(b.status));
            break;
    }

    console.log(result);
}



ticketsList(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
);