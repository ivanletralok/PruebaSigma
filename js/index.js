$(document).ready(async function() {
    console.log("ready")
    const respon = await departamento();
    cargarDep(respon)
});


async function departamento() {
    const url = '../server/api.php'
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

    var data = { departamento: dep, ciudad: ciud };
    $('input').each(function() {
        data[this.name] = this.value;

    });

    if (validarInput() == true) {
        fetch('./server/save.php', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .catch(error => console.error('Error:', error))
            .then(function(response) {
                if (response.status === 200) {
                    console.log(response)
                    swal({
                        title: "Bien Hecho!",
                        text: "Tu información ha sido recibida satisfactoriamente!",
                        icon: "success",
                    });
                    limpiarinput();
                } else {
                    swal("intente cambiar el correo electronico quizas exista en nuestra base de datos, si el problema perciste comuniquese con el administrador")
                }
            });
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
                    swal('El correo electrónico introducido no es correcto.');
                    return false;
                }
                return true
            } else {
                swal("campo nombre es obligatorio")
            }

        } else {
            swal("campo ciudad es obligatorio")
        }
    } else {
        swal("campo de departamento es obligatorio")
    }
}

function limpiarinput() {
    $('#ciudad').empty();
    $('#nombre').val('');
    $("#email").val('');
}