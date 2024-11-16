// Q1: Power Function
function power(a, b) {
    return Math.pow(a, b);
}

// Q2: Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Q3: Triangle Area
function areaOfTriangle(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Q4: Average and Percentage
function mainFunction(marks1, marks2, marks3) {
    const average = (marks1 + marks2 + marks3) / 3;
    const percentage = ((marks1 + marks2 + marks3) / 300) * 100;
    return { average, percentage };
}

// Q5: Custom IndexOf
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// Q6: Remove Vowels
function removeVowels(sentence) {
    return sentence.replace(/[aeiou]/gi, '');
}

// Q7: Count Successive Vowels
function countSuccessiveVowels(line) {
    const matches = line.match(/[aeiou]{2}/gi);
    return matches ? matches.length : 0;
}

// Q8: Distance Conversions
function distanceConversions(km) {
    return {
        meters: km * 1000,
        feet: km * 3280.84,
        inches: km * 39370.1,
        centimeters: km * 100000,
    };
}

// Q9: Overtime Pay
function calculateOvertimePay(hoursWorked) {
    const overtimeHours = hoursWorked - 40;
    return overtimeHours > 0 ? overtimeHours * 12 : 0;
}

// Q10: Cashier Notes
function cashierNotes(amount) {
    const notes100 = Math.floor(amount / 100);
    const remaining1 = amount % 100;

    const notes50 = Math.floor(remaining1 / 50);
    const remaining2 = remaining1 % 50;

    const notes10 = Math.floor(remaining2 / 10);

    return { notes100, notes50, notes10 };
}
