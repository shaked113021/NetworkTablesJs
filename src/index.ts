import { NTBoolean } from "./lib/networktables/types/NTBoolean";

const val: NTBoolean = new NTBoolean();

console.log('initialized NTBoolean');
console.log('---------------------');
console.log(`value ${val.value}`);
console.log(`raw value ${val.rawValue[0]}`);
console.log('');

val.value = true;
console.log('change value true');
console.log('-----------------');
console.log(`value ${val.value}`);
console.log(`raw value ${val.rawValue[0]}`);
console.log('');

val.value = false;
console.log('change value false');
console.log('----------------');
console.log(`value ${val.value}`);
console.log(`raw value ${val.rawValue[0]}`);
console.log('');

const tempArray = new Uint8Array(1);
tempArray[0] = 0x01;

val.rawValue = tempArray;
console.log('change rawValue 1');
console.log('------------------');
console.log(`value ${val.value}`);
console.log(`raw value ${val.rawValue[0]}`);
console.log('');

tempArray[0] = 0x00;
val.rawValue = tempArray;
console.log('change rawValue 0');
console.log('------------------');
console.log(`value ${val.value}`);
console.log(`raw value ${val.rawValue[0]}`);
