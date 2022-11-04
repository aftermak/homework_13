const marks1 = [7, 22, 33, 44, 55, 66, 77, 99, 110];
const marks2 = [17, 22, 33, 44, 88, 99, 100];

function getAvgMark () {
    return this.marks.reduce((a, b) => a + b, 0)/ this.marks.length;
}

function getMedian () {
    const sorted = [...this.marks].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function getMaxMark () {
    return Math.max(...this.marks);
}

function getMinMark () {
    return Math.min(...this.marks);
}

function getTotal () {
    return this.marks.reduce((a, b) => a + b, 0);
}

function getInfo () {
    return `${this.name} ${this.faculty} ${this.getTotal()}`;
};

function Student (name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.getAvgMark = getAvgMark;
    this.getMedian = getMedian;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
};

const student1 = new Student('John', 'ED', marks1);
const student2 = new Student('Dan', 'RT', marks2);

console.log(student1.getMedian());
console.log(student2.getInfo());