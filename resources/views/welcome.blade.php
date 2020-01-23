<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Auction App</title>

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
        <link href='' rel="stylesheet">
        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>

        <div id="app">
            <app-component></app-component>
        </div>

        <script src="{{asset('js/app.js')}}"></script>

    </body>
</html>
