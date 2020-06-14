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
        <div id="app">
            <div class="projects_wrapper">
                <div v-for="project in projects"
                v-bind:key="project.id"
                v-bind:project_in="project"
                v-bind:teams="teams"
                is="project_c"
                >
                </div>

            </div>


        </div>
        <!-- <label>Name</label>
        <input id="projectName"></input>
        <label>desc</label>
        <input id="template" type="checkbox">is waterval</input>
        <input id="projectDescription"></input>
        <button onclick="createNewProject()">add</button>
        <label>project zoeken</label>
        <input id="projectId"></input>
        <button onclick="showProject()">add</button> -->
    </body>
</html>
