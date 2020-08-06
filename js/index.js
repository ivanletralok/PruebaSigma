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
        console.log(element.ciudad, index)
    })
}