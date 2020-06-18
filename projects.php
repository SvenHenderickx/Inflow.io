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

        <div class="header">
            <div class="headerlogo">
                <img src="images/logo.png">
            </div>
            <div class="headerpersonal">
                <img src="images/persona.png">
                <div class="pcontainer">
                    <p class="pname">You</p>
                    <p class="pteam">Your team</p>
                </div>
            </div>
        </div>

        <div id="app">
            <div class="emptyImage" v-if="this.projects.size = 1">
                <img src="images/emptyProjects.png">
            </div>
            <div id="c1" class="projectscontainer">
                <div class="project" v-for="project in projects">
                    <img v-on:click="openProject(project.id)" class="snapshot" src="images/snapshot1.png">
                    <div class="options" v-on:click="myDropdown()" @mouseleave="mouseLeave"><i class="fa fa-cog" aria-hidden="true"></i>
                        <div id="myDropdown" v-if="isActive" class="dropdown-content">
                            <a v-on:click="openProject(project.id)">Open project</a>
                            <a v-on:click="myNameChangePopUp()">Verander projectnaam</a>
                            <a v-on:click="deleteProject(project.id)">Verwijder project</a>
                        </div>
                    </div>
                    <div class="titleproject"> {{ project.name }} </div>
                    <div class="titleclient"> {{ project.owner }} </div>

                    <div class="myNameChangePopUp" v-if="showNameChange">
                        <input v-model="project.name">
                        <button class="mooieKnop" type="submit" v-on:click="myNameChangePopUp()">Opslaan</button>
                    </div>

                </div>
                <div  v-on:click="redirectTo('newProject.php')" id="projectadd" class="projectadd">
                    <div class="addicon"><i class="fa fa-plus" aria-hidden="true"></i></div>
                    <div class="titleproject">Nieuw project</div>
                </div>
                <div class="hoverborder"></div>
                <div class="project invis"></div>
            </div>
        </div>
    </body>
</html>