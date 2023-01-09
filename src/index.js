
module.exports = function toReadable(number) {
    let getNumbers = Array.from(String(number));
    let catOfHundreds = getNumbers.at(-3);
    let catOfTenths = getNumbers.at(-2);
    let catOfUnits = getNumbers.at(-1);
    
    let digits = ["zero","one","two","three","four", "five", "six", "seven", "eight", "nine"];
    
    let digits20 = ['ten', "eleven", "twelve", 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let digitsTenth = ['#', '#', 'twenty','thirty','forty','fifty','sixty','seventy','eighty', 'ninety'];
    let result;
    let TenUn = Number(catOfTenths + catOfUnits + ' ');
    (TenUn > 9 && TenUn <20) ? TenUn = true : TenUn = false;
  
        (number <= 9) ? result = digits[number] :
        (number > 9 && number < 20) ? result = (digits20[catOfUnits]) :
        (number >= 20 && number < 100) ? result = (`${digitsTenth[catOfTenths]} ${(catOfUnits != 0) ? digits[catOfUnits] : ''}`):
        (number >= 100 && number < 1000) ? result = (`${digits[catOfHundreds]} hundred ${TenUn ? digits20[catOfUnits] : (catOfTenths != 0) ? digitsTenth[catOfTenths] : ''}  ${TenUn ? '' : (catOfUnits != 0) ? digits[catOfUnits] : ''}`) : result = 'Число больше 1000';
     
        return result.replace(/\s+/g, ' ').trim();
}


