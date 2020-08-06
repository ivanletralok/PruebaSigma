$(document).ready(async function() {
    console.log("ready")
    const respon = await departamento();
    cargarDep(respon)
});


async function departamento() {
    const url = 'https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json'
    const response = await fetch(url, { mode: 'cors' })
    const data = await response.json()
    const depart = [];
    for (i in data) {
        depart.push({ departamento: i, ciudad: data[i] })
    }
    return depart;
}

function cargarDep(respon) {
    respon.map((element, index) => {
        $("#departamento").append('<option value=' + element.departamento + '>' + element.departamento + '</option>');
    })

    $('#departamento').click(function() {
        let valorDep = $("#departamento option:selected").text();
        respon.map((element, index) => {
            if (element.departamento == valorDep) {
                $('#ciudad').empty();
                for (let i = 0; i < element.ciudad.length; i++) {
                    $("#ciudad").append('<option value=' + element.ciudad[i] + '>' + element.ciudad[i] + '</option>');
                }
            }
        })
    })
}

$('#enviar').click((event) => {
    event.preventDefault();
    let dep = $("#departamento option:selected").text();
    let ciud = $("#ciudad option:selected").text();

    var config = { departamento: dep, ciudad: ciud };
    $('input').each(function() {
        config[this.name] = this.value;

    });

    if (validarInput() == true) {
        console.log("true")
        swal({
            title: "Bien Hecho!",
            text: "Datos Enviados Con Exito!",
            icon: "success",
        });
        limpiarinput();
    } else {
        console.log("false")
    }
})

function validarInput() {
    let dep = $('#departamento').val();
    let ciud = $('#ciudad').val();
    let nom = $('#nombre').val();

    if (dep != null) {
        if (ciud != null) {
            if (nom != '') {
                if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
                    alert('El correo electrónico introducido no es correcto.');
                    return false;
                }
                return true
            } else {
                alert("campo nombre es obligatorio")
            }

        } else {
            alert("campo ciudad es obligatorio")
        }
    } else {
        alert("campo de departamento es obligatorio")
    }
}

function limpiarinput() {
    $('#departamento').empty();
    $('#ciudad').empty();
    $('#nombre').val('');
    $("#email").val('');
}