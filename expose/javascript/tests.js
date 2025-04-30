/*function sumValues(num1, num2, add) {

    if(add) {
        const result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    } else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);*/

/*function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;
    
    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);
    console.log(discounted);
    // console.log(length);

    return discounted;
}

discountPrices([100, 200, 300], 0.5); */

/*let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.name);
console.log(student['Grad Year']);
student.greeting();
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);*/

/*'3' + 2
'3' - 2
3 + null
'3' + null
true + 3
false + null
'3' + undefined
'3' - undefined*/

/*'2' > 1
'2' < '12'
2 == '2'
2 === '2'
true == 2
true === Boolean(2)*/

/*let q = true;
let w = Boolean(2);
let e = (q === w);
let r = (true == Boolean(2));
console.log(e);
console.log(r);*/

/*function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    console.log(newArr);
    return newArr;
    
}

function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);*/

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printNums();