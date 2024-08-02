function sayhi(dayOFweek: number) {
    if (dayOFweek === 1) {
        console.log ('สวัสดีวันอาทิตย์')
    }
    else if (dayOFweek === 2) {
        console.log ('สวัสดีวันจันทร์')
    }
    else if (dayOFweek === 3) {
        console.log ('สวัสดีวันอังคาร')
    }
    else if (dayOFweek === 4) {
        console.log ('สวัสดีวันพุธ')
    }
    else if (dayOFweek === 5) {
        console.log ('สวัสดีวันพฤหัส')
    }
    else if (dayOFweek === 6 ) {
        console.log ('สวัสดีวันศุกร์')
    }
    else if (dayOFweek === 7) {
        console.log ('วันเสาร์')
    }
}
sayhi(1)


function sayhi(dayOFweek: number) {
    switch (dayOFweek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log ('สวัสดีวันจันทร์') 
            break
        case 3:
            console.log ('สวัสดีวันอังคาร')   
            break
        case 4: 
            console.log ('สวัสดีวันพุธ') 
            break
        case 5: 
            console.log ('สวัสดีวันพฤหัส')   
            break
        case 6:
            console.log ('สวัสดีวันศุกร์') 
        case 7: 
            console.log ('สวัสดีวันเสาร์')
            break 

    }
}
sayhi(7)


function size(size: string) {
    switch (size) {
    case('s') :
       console.log ('ผอม')
       break
    case('m') :
       console.log ('ผอม')
       break
    case('l') :
       console.log ('ท้วม')
       break
    case('xl') :
       console.log ('อ้วน')
       break
    case('2xl') :
       console.log ('อ้วน')
       break
    }
}
size('l')


function fixedDecimal(n: number,digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.67676,20))

function Pageup(s: number ) {
    const x = s.toLocaleString()
    return x 

}

console.log(Pageup(1000))


function checkStringLenght (o: string) {
    const x = o.length
    return x 


}
console.log(checkStringLenght('dsdsddsd'))

function getCharByIndex (msg: string, index: number) {
    return msg.charAt(index)
}

console.log(getCharByIndex('หิวข้าว',5))





const str: string = 'อยากกลับบ้าน'

console.log(str.indexOf('n'))



const str: string = 'เรารักแก'

console.log(str.includes('รัก'))



function Sleep(utk: string , insert: string) {
    if (utk.includes(insert)=== true) {
        console.log(utk.indexOf(utk))
    }else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

Sleep('กลับบ้าน','kkk') 




    

       
