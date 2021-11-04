// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (){
    const copyDrivers = drivers.slice();
    copyDrivers.pop();
    copyDrivers.pop();
    return copyDrivers;
};

const returnLastTwoDrivers = function (){
    const copyDrivers = drivers.slice();
    copyDrivers.shift();
    copyDrivers.shift();
    return copyDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue){
    return function (value){
        return multiplyValue * value;
    }; //end of callback/nested function
}; //end out outer function

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, chooseDrivers){
    return chooseDrivers();
}