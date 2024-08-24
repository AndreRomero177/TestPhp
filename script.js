function validateExam() {
    const answers = {
        q1: "B",
        q2: "B",
        q3: "B",
        q4: "B",
        q5: "A",
        q6: "A",
        q7: "A",
        q8: "A",
        q9: "A"
    };

    let score = 0;

    for (let i = 1; i <= 9; i++) {
        const userAnswer = document.getElementById(`q${i}`).value;

        if (userAnswer === answers[`q${i}`]) {
            switch (i) {
                case 1: case 4:
                    score += 4; break;
                case 2: case 3: case 5: case 6: case 8:
                    score += 8; break;
                case 7: case 9:
                    score += 10; break;
            }
        }
    }

    document.getElementById("result").innerHTML = `Tu puntaje es: ${score}/100`;
}

