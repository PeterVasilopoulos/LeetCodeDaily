score1 = [2, 5, 7, 8, 1]

function findRelativeRanks(score) {
    let ordered = score.toSorted((a, b) => b - a)

    let answer = []

    for (let i = 0; i < score.length; i++) {
        let index = ordered.findIndex((el) => el === score[i])
        console.log(score[i] + " " + index)

        answer[index] = `${index + 1}`
    }

    return answer
}

console.log(findRelativeRanks(score1))
