import data from './data.js';


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

function count(d) {
    let result = [];
    let total = 0;
    let peopleCount = 0;
    let people = [];
    let animalsCount = 0;
        for(let j = 0; j < d.people.length; j++){
            peopleCount++;            
            animalsCount = 0;
            for (let k = 0; k < d.people[j].animals.length; k++){
                animalsCount++;
            }
            total += animalsCount;
            people.push({"name":d.people[j].name + ` [${animalsCount}]`, "animals":d.people[j].animals});
        }
    total += peopleCount;
    result = {"name": d.name + ` [${total}]`,"people": people};
    return result;
}

const args = process.argv.slice(2)[0];
if (args.includes("--filter")) {
    let input = parseInput(args);
    let result = filter(input);
    console.log(JSON.stringify(result, null, 2));
} else if (args === "--count") {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(count(data[i]));
    }
    console.log(JSON.stringify(result, null, 2));

}