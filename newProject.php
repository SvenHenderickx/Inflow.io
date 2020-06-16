<html>
<head>

    <title>Inflow.io</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jQuery & Fonts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="style/normalize.css" />
    <link rel="stylesheet" type="text/css" href="style/default.css" />
    <script src="https://use.fontawesome.com/6ea5af59bd.js"></script>

    <!-- Vue.js  -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <!-- Custom styles and script -->
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script src="script/script.js"></script>

</head>
<body>

<div id="app">
    <h1>Maak een nieuw project aan</h1>
    <div class="">
        <h2>Wat wordt de naam?</h2>
        <input id="projectName" type="text">
        <h2>Voor wie?</h2>
        <input id="projectCompany" type="text">
        <h2>Waar gaat dit project over?</h2>
        <input id="projectDesc" type="text">
        <h2>Probeer deze templates!</h2>
        <p>Wil je een van de volgende methodes gebruiken bij je project? Probeer een van onze project templates om het process te versnellen.</p>
        <label>
            <input value="blanco" name="template" type="radio" checked><img src="images/blanco.png"></input>
        </label>
        <label>
            <input value="waterfall" name="template" type="radio"><img src="images/waterval.png"></input>
        </label>
        <label>
            <input value="scrum" name="template" type="radio"><img src="images/scrum.png"></input>
        </label>
        <button type="submit" v-on:click="addProject()">Maak je project aan</button>
    </div>
    <div>
        <img src="images/newProject.png">
    </div>
</div>

</body>
</html>