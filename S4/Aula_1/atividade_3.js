const precos = [12.5, 30, 99.99, 5];

const arrayMap = precos.map((item) => {
    return "R$ " + item.toFixed(2);
});

console.log(arrayMap);