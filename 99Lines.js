let friends = [ {
    name: 'salem', 
},
{
    name: 'junie',
},
{
    name: 'ghost',
},
{
    name: 'pants',
},
{
    name:'marvin'
}];
friends.map(linesOfCode);

function linesOfCode(friends) {
    for (let i = 99;  i > 0;  i--) {
         if (i !== 1) {
             console.table(friends.name + ": "+ [i] + " Lines of code in the file, " + [i] + " lines of code, " + friends.name + " strikes ones out, clears it all out, " + [i - 1] + " lines of code in the file");
         } else {
             console.table(friends.name + ": " + "1 line of code in the file, 1 line of code," + friends.name + " strikes it out clears it all out, no more code in the file");
         }
     }
 }; 