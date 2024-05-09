score1 = [2, 5, 7, 8, 1]

function findRelativeRanks(score) {
    let sorted = []

    for (let i = 0; i < score.length; i++) {
        sorted[i] = score[i]
    }

    sorted.sort((a, b) => b - a)

    let answers = []

    for (let i = 0; i < score.length; i++) {
        let placement = sorted.indexOf(score[i]) + 1

        if (placement <= 3) {
            if (placement === 1) {
                placement = "Gold Medal"
            } else if (placement === 2) {
                placement = "Silver Medal"
            } else {
                placement = "Bronze Medal"
            }
        }

        answers[i] = placement.toString()
    }

    return answers
}

console.log(findRelativeRanks(score1))
