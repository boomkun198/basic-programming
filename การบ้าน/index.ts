function BMI (Height: number, Weight: number) {
    let BMI = (Weight / (Height * Height))

    if(BMI < 18.50) {
        return 'น้ำหนักน้อย / ผอม'
    }else if (BMI >= 18.50 && BMI <= 22.90) {
        return 'ปกติ'
    }else if (BMI >= 23 && BMI <= 24.90) {
        return 'ท้วม / โรคอ้วนระดับ 1'
    }else if (BMI >= 25 && BMI <= 29.90) {
        return 'อ้วน / โรคอ้วนระดับ 2'
    }else {
        return 'อ้วนมาก / โรคระดับ 3'
    }
        
    
}

console.log (BMI(1.74,65))