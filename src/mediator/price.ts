export default function price(...agrs: any): void {
    var description = agrs.shift();

    console.log(`--- ${description} ---`);

    var total = 0;

    agrs.map(product => {
        console.log(`${product.getName()}: ${product.getPrice()}`);
        total += product.getPrice();
    });

    console.log(`Total price: ${total}\n`);
}