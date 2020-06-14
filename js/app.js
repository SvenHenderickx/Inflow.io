let currentProject;

$(document).ready(function(){
    const app = new Vue({
        el: '#app',
        data: {
            projects:
            [
                {
                    id: 1,
                    name: 'Test',
                    owner: 1,
                    contact: 2,
                    description: 'andere tekst',
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
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Test 231',
                    owner: 1,
                    contact: 1,
                    description: 'andere tekst',
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
                        }
                    ]
                }
            ],
            users:
            [
                {
                    id: 1,
                    name: 'Jane Doe',
                    company_id: 1
                }
            ],
            teams:
            [
                {
                    id: 1,
                    name: 'Ananas'
                },
                {
                    id: 2,
                    name: 'Datastreams.io'
                }
            ],
            currentProject: 1
        },
        computed: {
            getCurrentProject:
            function(){
                return this.getProject(currentProject);
            }
        },
        watch: {

        },
        methods: {
            getProject:
            function(projectId){
                let out;
                console.log(this.projects)
                console.log(currentProject)
                $.each(this.projects, function(i,v){
                    if(projectId == v.id){
                        out = v;
                    }
                })
                return out;
            }
        }
    });
})
