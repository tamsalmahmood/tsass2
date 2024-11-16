// TypeScript version of all functions
function powerTS(a: number, b: number): number {
    return Math.pow(a, b);
}

function isLeapYearTS(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function areaOfTriangleTS(a: number, b: number, c: number): number {
    const s: number = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function mainFunctionTS(marks1: number, marks2: number, marks3: number): { average: number; percentage: number } {
    const average: number = (marks1 + marks2 + marks3) / 3;
    const percentage: number = ((marks1 + marks2 + marks3) / 300) * 100;
    return { average, percentage };
}

function customIndexOfTS(str: string, char: string): number {
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

function removeVowelsTS(sentence: string): string {
    return sentence.replace(/[aeiou]/gi, '');
}

function countSuccessiveVowelsTS(line: string): number {
    const matches = line.match(/[aeiou]{2}/gi);
    return matches ? matches.length : 0;
}

function distanceConversionsTS(km: number): { meters: number; feet: number; inches: number; centimeters: number } {
    return {
        meters: km * 1000,
        feet: km * 3280.84,
        inches: km * 39370.1,
        centimeters: km * 100000,
    };
}

function calculateOvertimePayTS(hoursWorked: number): number {
    const overtimeHours: number = hoursWorked - 40;
    return overtimeHours > 0 ? overtimeHours * 12 : 0;
}

function cashierNotesTS(amount: number): { notes100: number; notes50: number; notes10: number } {
    const notes100: number = Math.floor(amount / 100);
    const remaining1: number = amount % 100;

    const notes50: number = Math.floor(remaining1 / 50);
    const remaining2: number = remaining1 % 50;

    const notes10: number = Math.floor(remaining2 / 10);

    return { notes100, notes50, notes10 };
}
