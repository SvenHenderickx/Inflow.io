<html>
    <head>
        <title>
            Inflow.io
        </title>

        <?php

        require_once 'php/header.php'

         ?>
         <script>
         var x = $(location).attr('search');
         x = x.substring(4);
         console.log(x)

         currentProject = x;
         </script>
    </head>
    <body>
        <div id="app">
            <div
            v-bind:project="getCurrentProject"
            v-bind:teams="teams"
            is="projectpage">

            </div>
        </div>

    </body>
</html>
