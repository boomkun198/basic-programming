function k(a: number, b : number) {
    return a - b
}

console.log(k(80,15))

function m(p: number, o : number, y : number, l : number) {
     return p*o*y*l
}

console.log(m(7, 5, 8, 10))






function grade(homework: number,midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50 ) {
        return 'เกรด f'
    } else if (score < 60) {
        return 'เกรด d'
    } else if ( score < 70) {
        return 'เกรด c'
    } else if (score < 80) {
        return 'เกรด b'
    } else {
        return 'เกรด a'
    }
}

console.log(grade(89,35,15))



