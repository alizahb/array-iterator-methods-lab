

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];

  const travelMethods = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 }
  ];
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Exercise 1- Array.prototype.filter()
let veryOldInventors= []; 
veryOldInventors = inventors.filter(function(event) {
    return event.year < 1600 && event.year > 1499;
});
console.log('Exercise 1 My Result: ', veryOldInventors)
console.log('Exercise 1 Correct Result: ',
    [
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ]
); 

//Exercise 2- Array.prototype.map()

let inventorNames = []; 
inventorNames = inventors.map(({first, last}) => ({first, last})); 
console.log('Exercise 2 My Result: ', inventorNames)
console.log('Exercise 2 Correct Result: ',
    [
        { first: 'Albert', last: 'Einstein' },
        { first: 'Isaac', last: 'Newton' },
        { first: 'Galileo', last: 'Galilei' },
        { first: 'Marie', last: 'Curie' },
        { first: 'Johannes', last: 'Kepler' },
        { first: 'Nicolaus', last: 'Copernicus' },
        { first: 'Max', last: 'Planck' },
        { first: 'Katherine', last: 'Blodgett' },
        { first: 'Ada', last: 'Lovelace' },
        { first: 'Sarah E.', last: 'Goode' },
        { first: 'Lise', last: 'Meitner' },
        { first: 'Hanna', last: 'Hammarström' }
    ]
)

//Exercise 3- Array.prototype.sort()
// Array.prototype.sort()

let sortedByBirthYear = []; 

sortedByBirthYear = inventors.sort((a,b) => (
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0)); 

console.log('Exercise 3 My Result: ', sortedByBirthYear)
console.log('Exercise 3 Correct Result: ',
    [
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
    ]
)

//Exercise 4- Array.Protoype.Find

let inventorNamedAda = {}

inventorNamedAda = inventors.find(({first})=> first ===
"Ada"); 
console.log('Exercise 4 My Result: ', inventorNamedAda)
console.log('Exercise 4 Correct Result: ', { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 })

//Exercise 5- Array.prototype.map()
let firstLast = []; 
let pplString = people.toString; 
pplString = pplString.split(', '); 
firstLast = people.map((pplString) => pplString.reverse); 
console.log('Exercise 5 My Result: ', firstLast)
console.log('Exercise 5 Correct Result: ',
    [
        'Carl Becker',
        'Samuel Beckett',
        'Mick Beddoes',
        'Henry Beecher',
        'Ludwig Beethoven',
        'Menachem Begin',
        'Hilaire Belloc',
        'Saul Bellow',
        'Robert Benchley',
        'Peter Benenson',
        'David Ben-Gurion',
        'Walter Benjamin',
        'Tony Benn',
        'Chester Bennington',
        'Leana Benson',
        'Silas Bent',
        'Lloyd Bentsen',
        'Ric Berger',
        'Ingmar Bergman',
        'Luciano Berio',
        'Milton Berle',
        'Irving Berlin',
        'Eric Berne',
        'Sandra Bernhard',
        'Yogi Berra',
        'Halle Berry',
        'Wendell Berry',
        'Erin Bethea',
        'Aneurin Bevan',
        'Ken Bevel',
        'Joseph Biden',
        'Ambrose Bierce',
        'Steve Biko',
        'Josh Billings',
        'Frank Biondo',
        'Augustine Birrell',
        'Elk Black',
        'Robert Blair',
        'Tony Blair',
        'William Blake'
    ]
)


//Exercise 6- Array.prototype.some()
let isAdultPresent = null; 
isAdultPresent = devs.some(dev=> dev.year > 2006); 

console.log('Exercise 6 My Result: ', isAdultPresent)
console.log('Exercise 6 Correct Result: ', true)

//Exercise 7- Array.prototype.every()

let isEveryone19OrOlder = null;
isEveryone19OrOlder = devs.every(dev=> dev.year >= 2005); 
console.log('Exercise 7 My Result: ', isEveryone19OrOlder)
console.log('Exercise 7 Correct Result: ', false)

//Exercise 8- Array.prototype.find()

let commentById = {}; 
commentById = comments.find(({id}) => id ===
823423); 
console.log('Exercise 8 My Result: ', commentById)
console.log('Exercise 8 Correct Result: ', { text: 'Super good', id: 823423 })

//Exercise 9- Array.prototype.findIndex()

let idx = null; 
idx = comments.findIndex(({id}) => id === 123523);  
console.log('Exercise 9 My Result: ', idx)
console.log('Exercise 9 Correct Result: ', 3)
