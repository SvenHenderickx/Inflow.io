<html>
    <head>
        <title>
            Inflow.io
        </title>

        <?php

        require_once 'php/header.php'

         ?>

    </head>
    <body>
        <div id="main">

        </div>
        <script>
        $(document).ready(function(){
            var x = $(location).attr('search');
            x = x.substring(4);
            console.log(x)

            console.log(getProject(x));

            currentProject = getProject(x);
        })
        </script>
    </body>
</html>
