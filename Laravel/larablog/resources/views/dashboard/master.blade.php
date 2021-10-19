<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Módulo Administrador</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>

<body>

    <div class="container-fluid">

        <div class="row">
            <div class="col-md-3 col-xs-1" id="sidebar">
                @include('dashboard.partials.nav-header-main')
            </div>
            
            <main class="col-md-9 col-xs-11">
                <a href="#sidebar" data-toggle="collapse"><i class="fa fa-bars"></i></a>
                @include('dashboard.partials.session-flash-success')
                @yield('content')
            </main>
        </div>

    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>