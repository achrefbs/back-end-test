import data from './data.js';
import count from './functions/count.js';

function parseInput(string){
    let input = string.split("=")[1];
    return input;
}

function filter(filter){
    let result = [];
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].people.length; j++){
            for(let k = 0; k < data[i].people[j].animals.length; k++){
                if(data[i].people[j].animals[k].name.includes(filter)){
                 result.push({"name":data[i].name,"people" : [{"name":data[i].people[j].name,"animals":[{"name":data[i].people[j].animals[k].name}]}]});
                }
            }
        }
     }
     return result;
}



const args = process.argv.slice(2)[0];
if (args.includes("--filter")) {
    let input = parseInput(args);
    let result = filter(input);
    console.log(JSON.stringify(result, null, 2));
} else if (args === "--count") {
    console.log(JSON.stringify(count(data), null, 2));
}