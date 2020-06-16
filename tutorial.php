<html>
    <head>
        <title>
            Inflow.io
        </title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- jQuery & Fonts -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="style/normalize.css" />
        <link rel="stylesheet" type="text/css" href="style/default.css" />

        <!-- My own styles and script -->
        <link rel="stylesheet" type="text/css" href="style/style.css">
        <script src="script/script.js"></script>

    </head>
    <body>
        <div id="projects">

        </div>
        <label>Name</label>
        <input id="projectName"></input>
        <label>desc</label>
        <input id="template" type="checkbox">is waterval</input>
        <input id="projectDescription"></input>
        <button onclick="createNewProject()">add</button>
        <label>project zoeken</label>
        <input id="projectId"></input>
        <button onclick="showProject()">add</button>
    </body>
</html>
