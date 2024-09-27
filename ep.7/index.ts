const score = [10,23,26,30,33]
let kub: number = 0
for(let i = 0; i < score.length; i++) {
    kub = kub + score[i]
}


let avg = kub / score.length
console.log("Total:", kub)
console.log("Avg: ",avg)



const myStudent: string = "เซน,แทน,เวฟ,รุ้ง,แท็ค,สร"

const myStudentArray: string[] = myStudent.split(',')

console.log(myStudent)
console.log(myStudentArray[0])



const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split('')[0])

console.log(fullName.slice(0,fullName.indexOf('')))



const animals: string = "หมา*แมว*นก*ฉลาม"

const animalsArray = animals.split("*")

console.log("ตั้งต้น:",animalsArray)

animalsArray.pop() // เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก:", animalsArray)

animalsArray.push('ยีราฟ') // ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ",animalsArray)

animalsArray.shift() // เอาตัวหน้าออก

console.log("เอาตัวหน้าออก:",animalsArray )

animalsArray.unshift('ตัวเหี้ย') // ใส่ตัวหน้า

console.log("ใส่ตัวหน้า:",animalsArray )


const fruits = ["Banana","Orange","Apple","Mango"]

fruits.sort() // เรียง A - Z

console.log(fruits)

fruits.reverse() // เรียง Z - A

console.log("เรียงZ - A ",fruits)


const fruitsSlice = fruits.slice(0,2)

console.log("ตัด:", fruitsSlice)



const nickname : string = "แจน,นุ่น,โบว์,กระต่าย"

const nicknameArray = nickname.split(',')
nicknameArray.sort() // เรียง ก - ฮ
console.log(nicknameArray)
nicknameArray.reverse() // เรียง ฮ - ก
console.log(nicknameArray)




const me = {
    firstName: 'Traikun',
    LastName : 'Markpoka',
    age: 1000,
    cam: 700/999,
    swime: 112,
    road: 'allline',
    zone: 'wisdom789',
    county: 'hiphop',
    province: 'silver',
    zipcode: 59871,
    email: 'simson456@gmail.com',
    mobilephone: 'mom',
    phonenumber: 1150,


}

// ประวัติส่วนตัว

// ชื่อ : Traikun 
// นามสกุล: Markpoka 
// อายุ: 1000
// ที่อยู่ปัจจุบัน: 700/999
// หมู่ที่: 112
// ตำบล/แขวง: 
// อำเภอ/เขต: 
// จังหวัด: 
// รหัสไปรษณีย์: 59871
// อีเมล: simson456@gmail.com
// มือถือ: mom
// เบอร์: 1150

