import * as _ from "lodash";

function print_memory($step)
{
	console.log(`Step ${$step} -  . ${process.memoryUsage().heapUsed / 1024 / 1024}`);
}

print_memory(1);
var a = _.fill(Array(200000), 0);
print_memory(2);
var b = [];
for (let i=0; i<200000; i++) {
    b.push(i);
}
print_memory(3);
var c = a;
print_memory(4);
c[4] = 4;
print_memory(5);