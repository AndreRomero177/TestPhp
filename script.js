function validateExam() {
    const answers = {
        q1: "clase es una plantilla, objeto es una instancia",
        q2: "exec no devuelve resultados de select, query devuelve un pdo statement",
        q3: "get recuperar variables pasadas con get, post recuperar variables pasadas con post, request recuperar variables pasadas con get y post, files datos de archivos subidos",
        q4: "foreach recorrer array imprimir clave valor",
        q5: "session_start crear o continuar sesión, _session inicializar obtener valor variables de sesión",
        q6: "setcookie crear cookie 12 horas, _cookie recuperar cookie",
        q7: "conectar servidor base de datos seleccionar base de datos enviar instrucción sql obtener procesar resultados cerrar conexión",
        q8: "sesiones pueden almacenar más datos que cookies, más seguras datos almacenados en el servidor",
        q9: "constructor inicializar atributos, destructor eliminar objeto de memoria, ambos opcionales"
    };

    let score = 0;

    for (let i = 1; i <= 9; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
        const correctAnswer = answers[`q${i}`];

        // Si la respuesta del usuario contiene las palabras clave de la respuesta correcta
        if (correctAnswer.split(', ').some(keyword => userAnswer.includes(keyword))) {
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
