var  tablaProfesor = localStorage.getItem("tablaPacienteStorage");
tablaProfesor = JSON.parse(tablaProfesor); 
if(tablaProfesor == null){ // si no hay datos
    tablaProfesor = tablaProfesor ? JSON.parse(tablaProfesor) : [];
}

listar();

function abrirForm(idForm){

    console.log("ENTRANDO A LA FUNCIÓN abrirForm.......");
    localStorage.setItem("idForm",JSON.stringify(idForm));
    window.location.replace("ClientesForm.html");
}
function listar(){
    console.log("ENTRANDO A LA FUNCIÓN listar.......");

    var dataFila = '';
    var dniApellidos = document.getElementById("txtDniFiltro").value.trim(); // Obtener el valor del filtro y eliminar espacios en blanco al inicio y al final

    if (tablaProfesor.length > 0) {
        for (const i in tablaProfesor) {
            var varProfesor = JSON.parse(tablaProfesor[i]);

            if (dniApellidos !== "") {
                if (varProfesor.apellidos.toLowerCase().includes(dniApellidos.toLowerCase())) { // Verificar si el apellido contiene el valor del filtro (ignorar mayúsculas/minúsculas)
                    dataFila += construirFila(varProfesor);
                }
            } else {
                dataFila += construirFila(varProfesor);
            }
        }
        console.log(dataFila);
        document.getElementById("dataProfesores").innerHTML = dataFila;
    }
}


function construirFila(profesor){
    var dataFila = '';

    dataFila += "<tr class='text-center'>";
    dataFila += "<td class='align-middle h5'>" + profesor.nroProfesor + "</td>";
    dataFila += "<td class='align-middle h5'>" + profesor.apellidos + "</td>";
    dataFila += "<td class='align-middle h5'>" + profesor.nombres + "</td>";
    dataFila += "<td class='align-middle h5'>" + profesor.dni + "</td>";
    dataFila += "<td class='align-middle'><pre class='h5 mb-0'>" + profesor.plan + "</pre></td>";
    dataFila += "<td class='align-middle h5'>" + profesor.precio + "</td>";
    dataFila += "<td class='align-middle h5'>" + profesor.pago + "</td>";
    dataFila += "<td class='align-middle h5'>" + profesor.postular + "</td>";
    dataFila += "<td class='align-middle'>" +
                "<button type='button' class='btn btn-warning' onclick='abrirForm("+ profesor.nroProfesor +")'><p class='h5 mb-0'>EDITAR</p></button>" +
                "</td>"; //falta
    dataFila += "</tr>";
    return dataFila;
}

function limpiar(){
    document.getElementById("txtDniFiltro").value="";
    listar();
}