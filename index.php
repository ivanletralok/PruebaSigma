<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css" integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX" crossorigin="anonymous">

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>

    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <title>Pieza Sigma</title>
</head>

<body>

    <div class="container">

        <header>
            <img class="logo" src="./img/sigma-logo.png" alt="logo">
        </header>

        <h1 class="tittle">Prueba De Desarrollo Sigma</h1>

        <div class="content">
            <span class="text">
                <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta porro dolores iste </br> magni aliquid odio ad.  Nisi quisquam consectetur beatae voluptatem placeat, eligendi natus veritatis  quaerat </br> numquam eum!  Minima?
                Lorem, ipsum dolor  sit amet consectetur adipisicing elit.
            </span>

            <div class="conten2 row">
                <div class="fondo col-lg-5">
                    <img class="imgagges" src="./img/sigma-image.png" alt="">
                </div>

                <form class="form col-11 col-sm-10 col-md-10 col-lg-5" id="form">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="departamento">Departamento*</label>
                            <select type="text" class="form-control" id="departamento" name="departamento"> </select>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="ciudad">Ciudad*</label>
                            <select type="text" class="form-control" id="ciudad" name="ciudad"></select>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="nombre">Nombre*</label>
                            <input maxlength="50" type="text" class="form-control" id="nombre" name="nombre">
                        </div>

                        <div class="form-group col-md-12">
                            <label for="email">Corrreo*</label>
                            <input maxlength="30" type="email" class="form-control" id="email" name="email">
                        </div>

                    </div>

                    <button type="button" class="btn" id="enviar">
                        <span>ENVIAR</span>
                    </button>

                </form>
            </div>

        </div>


    </div>

    <script src="./js/index.js"></script>

</body>

<footer class="footer">

</footer>

</html>