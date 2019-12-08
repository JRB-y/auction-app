<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Auction App</title>

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
        <link href='' rel="stylesheet">
        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>

        <v-app id="app">
            <top-bar-nav></top-bar-nav>

            <v-content class="mb-5">
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-content>

            <main-footer></main-footer>
        </v-app>

        <script src="{{asset('js/app.js')}}"></script>

    </body>
</html>
