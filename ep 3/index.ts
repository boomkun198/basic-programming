function helloworld() {
    console.log("สวัสดี")
}

helloworld() // ไม่มี input ไม่มี output

function helloname(name: string) {
    console.log(name)
}

helloname('bell') // มี input แต่ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input แต่มี output


function st(fname: string, sname: string) {

    if(fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix','zane') 



function kp(fname: string, sname: string, jname: string) {

    if((fname ==='mix' && sname === 'zane')|| jname === 'forth' ) {
        console.log("พร้อมเรียน")
    }else {
        console.log("ไม่พร้อมเรียน")
    }
}

kp('mix', 'zane','forth')


function gk (gender: string, height: number, weight: number) {

    if(gender === 'male' && (height > 170 || (weight > 50 && weight <= 110))) {
        console.log ("จับใบดำใบแดง") 
    }else {
        console.log("ไม่เข้าเกณฑ์")
    }

}          
    
gk('male',180 , 70);


function pubg (age: number , salary: number , totalDeposits: number) {

    if(age >= 16 && salary < 70000 && totalDeposits < 500000) {
        console.log ("รับ 10000")
    }else {
        console.log ("อด....")
    }
}

pubg(20,60000, 490000)



