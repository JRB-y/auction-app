<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>CKADOO ;)</title>

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Raleway|Material+Icons' rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">

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
