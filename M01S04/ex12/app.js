var globalVariable = 'Ma aflu in contextul global';

function contextTest () {
    var localVariable = 'Ma aflu in contextul loca';
    var globalVariable = 'Ma aflu in contectul global;'

    console.log(globalVariable);
    console.log(localVariable);
    console.log(noVariable);
}

console.log(globalVariable);
//console.log(localVariable);
contextTest();