module.exports =  function toReadble(x) {
    let getNumbers = Array.from(String(x));
    let hundredth = getNumbers.at(-3);
    let tenth = getNumbers.at(-2);
    let numbers = getNumbers.at(-1);
   
    let digits = ["Zero","One","Two","Three","Four", "Five", "Six", "Seven", "Eight", "Nine"];

    let digits20 = ['Ten', "Eleven", "Twelve", 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    let digitsTenth = ['#', '#', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty', 'Ninety'];

    return (x <= 9) ? digits[x] :
       (x > 9 && x < 20) ? digits20[numbers] :
        (x >= 20 && x < 100) ? `${digitsTenth[tenth]} ${(numbers != 0) ? digits[numbers] : ''}`:
        (x >= 100 && x < 1000) ? `${digits[hundredth]} hundred ${(tenth != 0) ? digitsTenth[tenth] : ''} ${ (numbers != 0) ? digits[numbers] : ''}` : 'Число больше 1000'
    }

