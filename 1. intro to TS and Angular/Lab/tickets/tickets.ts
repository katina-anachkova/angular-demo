class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string,price: number,status: string){
        this.destination = destination;
        this.price=price;
        this.status = status;
    }
}

let solve = (arr: any, criteria: string) => {
    let ticketArr = [];
    for (let el of arr) {
        let [dest, price, status] = el.split('|');

        let ticket = new Ticket (dest, price,status);
        
        ticketArr.push(ticket);
    };

    for (let ticket of ticketArr) {
        
    }


}

solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination')


