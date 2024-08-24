function validateExam() {
    const answers = {
        q1: "La diferencia entre estos dos términos está en que una clase es como una plantilla (o molde) donde define las propiedades y métodos que posee una entidad. En cambio, un objeto es una instancia de la clase. Se pueden crear muchos objetos de una misma clase, todos ellos independientes entre sí.",
        q2: "PDO::exec() ejecuta una sentencia SQL, cuyos posibles valores de retorno son solo True o False. No devuelve resultados de una sentencia SELECT. Devuelve el número de filas afectadas, recomendable para consultas: insert, delete, update, etc. Sintaxis: intPDO::exec(string $consulta) PDO::query() ejecuta una sentencia SQL en una única llamada a función y devuelve el resultado como un objeto de tipo PDOStatement. Se debe considerar su uso para una sentencia SELECT que sólo se necesita ejecutar una vez en el programa.",
        q3: "$_GET: array asociativo que permite recuperar variables que se han pasado con el método GET (información enviada por el FORM).  $_POST: array asociativo que permite recuperar variables que se han pasado con el método POST (información enviada por el FORM).  $_REQUEST: array asociativo que permite recuperar variables, pasadas tanto con el método $_GET como con el método $_POST.  $_FILES: array asociativo que contiene los datos de archivos que se han subido al servidor utilizando el método POST (información enviada por el FORM).",
        q4: "$empleados = array(\"12345671\" => \"Maximiliano\", \"12345672\" => \"Alejandro\", \"12345673\" => \"Ismael\"); foreach ($empleados as $dni => $nombre){ echo \"Nombre: $nombre - DNI: $dni\"; echo \"<br/>\"; }",
        q5: "Con la función bool session_start() creamos o continuamos una sesión. Esta función siempre devuelve TRUE, inicializa una sesión y le asigna un identificador de sesión único. Si la sesión ya está iniciada carga todas las variables de sesión, reanuda la actual basada en un identificador de sesión pasado mediante una petición GET o POST, o pasado mediante una cookie. Mediante el array $_SESSION inicializamos y obtenemos el valor de las variables de sesión.",
        q6: "Para crear una cookie se debe usar la función setcookie(nombre, valor, tiempo). Ejemplo: setcookie (\"nombre\", \"Alex\", time() + 60*60*12); Para recuperar la cookie, se utiliza el array asociativo $_COOKIE. Ejemplo: echo $_COOKIE[\"nombre\"];",
        q7: "1. Conectar con el servidor de bases de datos. 2. Seleccionar una base de datos. 3. Enviar la instrucción SQL a la base de datos. 4. Obtener y procesar los resultados. 5. Cerrar la conexión con el servidor de bases de datos.",
        q8: " Pueden funcionar aunque el usuario/a desactive la posibilidad de cookies (pueden pasar el identificador de sesión embebido en la url).  Pueden almacenar grandes cantidades de datos fácilmente, mucho más información que una cookie y además son capaces de almacenar datos binarios (Arrays).  Son más seguras puesto que los datos que se almacenan de la sesión lo hacen en el servidor y no en el cliente. En principio la seguridad de los servidores es mayor que la de los ordenadores de los usuarios.",
        q9: "Constructores: • Deben llamarse con un nombre fijo: __construct() • El objetivo fundamental del constructor es inicializar los atributos del objeto que creamos. • El constructor se llama automáticamente al instanciarse un objeto y no puede ser llamado nuevamente. • Un constructor puede recibir parámetros que se utilizan normalmente para inicializar atributos y no puede retornar datos. • El constructor es un método opcional, de todos modos es muy común definirlo. Destructores: • El destructor debe declararse con un nombre fijo: __destruct() • La creación del destructor es opcional. Sólo debemos crearlo si deseamos hacer alguna tarea específica cuando un objeto se elimine de la memoria. • El destructor se ejecuta justo antes de que el objeto sea eliminado de memoria."
    };

    let score = 0;

    for (let i = 1; i <= 9; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
        const correctAnswer = answers[`q${i}`].toLowerCase();

        if (userAnswer.includes(correctAnswer)) {
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
