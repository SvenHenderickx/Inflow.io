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

    <div class="headerB">
        <div class="headerpersonal">
            <img src="images/persona.png">
            <div class="pcontainer">
                <p class="pname">You</p>
                <p class="pteam">Your team</p>
            </div>
        </div>
    </div>

    <div id="app">
        <div class="invulForm">
            <h1>Maak een nieuw project aan!</h1>
            <div class="WatenWie">
                <div>
                    <h2>Wat wordt de naam?</h2>
                    <input id="projectName" type="text" placeholder="Vul hier een naam in...">
                </div>
                <div class="opvulImage">
                    <img src="images/newProject.png">
                </div>
                <div>
                    <h2>Voor wie?</h2>
                    <input id="projectCompany" type="text" placeholder="Vul hier een naam in...">
                </div>
            </div>
            <div>
                <h2>Waar gaat dit project over?</h2>
                <input id="projectDesc" type="text" size="57" placeholder="Omschrijf je projectdoel...">
            </div>
            <div class="templates">
                <h2>Probeer deze templates!</h2>
                <p>Wil je een van de volgende methodes gebruiken bij je project? Probeer een van onze project templates om het process te versnellen.</p>
            </div>
            <div class="RadioButtons">
                <div class="templateButton">
                    <label>
                        <input value="blanco" name="template" type="radio" checked><img src="images/blanco.png"></input>
                    </label>
                    <h4>Blanco project</h4>
                </div>
                <div class="templateButton">
                    <label>
                        <input value="waterfall" name="template" type="radio"><img src="images/waterval.png"></input>
                    </label>
                    <h4>Waterval methode</h4>
                </div>
                <div class="templateButton">
                    <label>
                        <input value="scrum" name="template" type="radio"><img src="images/scrum.png"></input>
                    </label>
                    <h4>Scrum methode</h4>
                </div>
            </div>
            <button class="mooieKnopB" type="submit" v-on:click="redirectTo('projects.php')">Terug</button>
            <button class="mooieKnop" type="submit" v-on:click="addProject()">Maak je project aan</button>
        </div>
    </div>

</body>
</html>