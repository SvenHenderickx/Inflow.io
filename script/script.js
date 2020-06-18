$(document).ready(function() {

      if (window.localStorage.getItem("NieuwOpSite") != "Nee") {
        location.href='index.html'
        window.localStorage.setItem("NieuwOpSite", "Nee");
    }

    let highestProjectId = 2;

    const app = new Vue({
        el: '#app',
        data: {
            dropdownState: 1,
            projects: [
                {
                    id: 1,
                    name: 'Test',
                    owner: 'Datasteams.io',
                    contact: 2,
                    description: 'Dit is de description van test project 1',
                    phases: [
                        {
                            id: 1,
                            name: 'Definitiefase',
                            position: 1,
                            isdone: true,
                            requests: [
                                {
                                    name: 'Verkeerstroming',
                                    description: 'Zal worden gebruikt voor het achterhalen van de optimale locaties van stoplichten op drukke knooppunten.'
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Ontwerpfase',
                            position: 2,
                            isdone: false
                        },
                        {
                            id: 3,
                            name: 'Bouwfase',
                            position: 3,
                            isdone: false
                        }
                    ]
                }
            ],
            templates: [
                {
                blanco: {
                    id: 1,
                    name: 'Blanco Template',
                    description: 'Blanco template'
                },
                waterfall: {
                    id: 1,
                    name: 'Waterfall template',
                    description: 'Waterfall template',
                    phases: [
                        {
                            id: 1,
                            name: 'Definitiefase',
                            position: 1,
                            isdone: true,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Ontwerpfase',
                            position: 2,
                            isdone: false,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Bouwfase',
                            position: 3,
                            isdone: false,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        }
                    ]
                },
                scrum: {
                    id: 1,
                    name: 'scrum template',
                    description: 'scrum template',
                    phases: [
                        {
                            id: 1,
                            name: 'Definitiefase',
                            position: 1,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Ontwerpfase',
                            position: 2,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Bouwfase',
                            position: 3,
                            requests: [
                                {
                                    name: 'Voorbeeldblok',
                                    description: 'Voorbeelddesc'
                                }
                            ]
                        }
                    ]


            },
            users: [{
                    id: 1,
                    name: 'User Ananas',
                    team_id: 1
                 },
                {
                    id: 2,
                    name: 'User Datastreams',
                    team_id: 1
                }
            ],
            teams: [
                {
                    id: 1,
                    name: 'Ananas'
                },
                {
                    id: 2,
                    name: 'Datastreams.io'
                }
            ]
        }]},
        computed: {

        },
        methods: {
            redirectTo: function(newLocation) {
                window.location.href = newLocation;
            },
            addProject: function() {
                let projectName = $('#projectName').val();
                let projectCompany = $('#projectCompany').val();
                let projectDesc = $('#projectDesc').val();
                let projectTemplate = $("input[name='template']:checked").val();

                highestProjectId++;

                let tempProject = {
                    id: highestProjectId,
                    name: projectName,
                    owner: projectCompany,
                    description: projectDesc,
                    phases: {}
                };

                if (projectTemplate === 'waterfall') {
                    tempProject.phases = this.templates.waterfall
                }
                else if (projectTemplate === 'scrum') {
                    tempProject.phases = this.templates.scrum
                }
                else {
                    tempProject.phases = this.templates.blanco
                }

                this.projects.push(tempProject);
                console.log(this.projects);
                this.redirectTo('projects.php');
            },
            openProject: function(projectID) {
                this.redirectTo('index.php' + '?projectID=' + projectID);
            },
            changeProjectName: function(projectID, currentName){
                let newName = prompt("Verander de naam!", currentName);
                this.projects.name = newName;
            },
            deleteProject: function(projectID){
                this.projects.splice(projectID, 1);
            },
            dropdownShow: function(){
                if (this.dropdownState = 1) {
                    $('#myDropdown').has("show");
                    this.dropdownState = 2;
                }
            },
            dropdownHide: function () {
                if (this.dropdownState = 2) {
                    $('#myDropdown').toggleClass("show");
                    this.dropdownState = 1;
                }
            }
    }
    });
});

