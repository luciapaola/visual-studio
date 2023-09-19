var tablaProfesor = localStorage.getItem("tablaPacienteStorage");
tablaProfesor = JSON.parse(tablaProfesor);
if (tablaProfesor == null) {
    tablaProfesor = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function guardar() {
    console.log("Entrando a la función guardar....");

    Swal.fire({
        title: 'Guardar',
        html: '¿Desea guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {  // Boton SI
            var objProfesor = {
                nroProfesor: (idForm > 0) ? idForm : (tablaProfesor.length + 1),
                apellidos: document.getElementById("txtApellidos").value,
                nombres: document.getElementById("txtNombres").value,
                dni: document.getElementById("txtDNI").value,
                plan: document.getElementById("txtPlan").value,
                precio: document.getElementById("txtPrecio").value,
                pago: document.getElementById("txtPago").value,
                postular: document.getElementById("cboPostular").value
            };

            console.log(objProfesor);

            if (idForm > 0) {   //Editar
                for (var i = 0; i < tablaProfesor.length; i++) {
                    var varProfesor = JSON.parse(tablaProfesor[i]);
                    if (varProfesor.nroProfesor == idForm) {
                        tablaProfesor[i] = JSON.stringify(objProfesor);
                        break;
                    }
                }
            } else { //NUEVO
                tablaProfesor.push(JSON.stringify(objProfesor));
            }

            // GUARDANDO EN EL LOCAL STORAGE
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaProfesor));

            //mensaje de confirmación
            Swal.fire('Se guardaron los cambios', '', 'success').then((result) => {
                // retornando a profesores.html
                window.location.replace("Clientes.html");
            });
        } else {
            Swal.fire('Cambios no guardados', '', 'info');
        }
    });
}

function cargarPagina() {
    console.log("Ingresando a la función cargarPagina....");
    console.log("idForm:" + idForm);
    if (idForm > 0) {
        //buscar datos de la tabla en el idFORM y poner en el formulario
        for (const i in tablaProfesor) {
            var varProfesor = JSON.parse(tablaProfesor[i]);
            if (varProfesor.nroProfesor == idForm) {
                document.getElementById("txtNroProfesor").value = varProfesor.nroProfesor;
                document.getElementById("txtApellidos").value = varProfesor.apellidos;
                document.getElementById("txtNombres").value = varProfesor.nombres;
                document.getElementById("txtDNI").value = varProfesor.dni;
                document.getElementById("txtPlan").value = varProfesor.plan;
                document.getElementById("txtPrecio").value = varProfesor.precio;
                document.getElementById("txtPago").value = varProfesor.pago;
                document.getElementById("cboPostular").value = varProfesor.postular;
                break;
            }
        }
    }
}

//en el input los primeros dígitos se tapan con *
function hideDigits() {
    var dniInput = document.getElementById("txtDNI");
    var dniValue = dniInput.value;

    if (dniValue.length >= 3) {
        var hiddenDigits = dniValue.length - 3;
        var hiddenText = "*".repeat(hiddenDigits);
        var visibleDigits = dniValue.substring(dniValue.length - 3);
        dniInput.value = hiddenText + visibleDigits;
    }
}