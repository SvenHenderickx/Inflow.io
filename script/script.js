$(document).ready(function(){

    // setCookie();

    if(typeof(Cookies.get('app')) == 'undefined'){
        setCookie();
    }
    else{
        getCookie();
    }

    getProjects();

});

let currentProject = null;

function setCookie(){
    Cookies.set('app', JSON.stringify(app));
}

function getCookie(){
    var cookieValue = Cookies.get("app")
    cookieValue = JSON.parse(cookieValue)
    app = cookieValue;
    console.log(cookieValue);
}

function highestProjectId(){
    let highId = 0;
    $.each(app.projects, function(i,v){
        if(highId <= v.id){
            highId = v.id + 1;
        }
    })

    return highId;
}

let app = {
    projects: [
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
        }
    ],
    users: [
        {
            id: 1,
            name: 'Jane Doe',
            company_id: 1
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
};

let templates = {
    blanco: {
        name: '',
        contact: '',
        description: '',
        phases: [

        ]
    },
    waterfall: {
            name: 'Waterfall template',
            contact: '',
            description: 'Gemaakt vanuit template',
            phases: [
                {
                    id: 1,
                    name: 'Definitiefase',
                    position: 1,
                    isdone: true,
                    requests: [
                        {
                            name: 'Voorbeeldblok',
                            description: ''
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
                    id: 2,
                    name: 'Bouwfase',
                    position: 3,
                    isdone: false
                }
            ]
    }
}

function getProjects(){
    $('#projects').empty();

    $.each(app.projects, function(i, v){
        showProjectVisual(v);
    })
}

function minusSomething(x, y){
    return x - y;
}

function getProject(projectId){
    let project = null;
    $.each(app.projects, function(i, v){
        if(v.id == projectId){
            project = v;
            return;
        }
    });

    return project;
}

function showProject(){
    let projectId = $('#projectId').val();
    let projectobj = getProject(projectId);

    showProjectVisual(projectobj);

}

function showProjectVisual(projectobj){

    let projectTile = '<div>';
    projectTile += '<p><a href="projects.php?id=' + projectobj.id + '">' + projectobj.name + ' - ' + projectobj.description +'</a></p>';
    projectTile += '<ul>'

    // $.each(projectobj.phases, function(ind, val){
    //     projectTile += '<li>' + val.name + '</li>'
    //     projectTile += "<ul>"
    //
    //     $.each(val.requests, function(index, value){
    //
    //         projectTile += "<li>" + value.name +"</li>"
    //
    //     })
    //     projectTile += "</ul>"
    // })

    projectTile += "</ul>"
    projectTile += "</div>"

    $('#projects').append(projectTile);
}

function createNewProject(){
    let name = $('#projectName').val();
    let desc = $('#projectDescription').val();

    if($('#template').is(":checked")){
        tempProject = templates.waterfall;
    }
    else{
        tempProject = templates.blanco;
    }

    tempProject.id = highestProjectId();
    tempProject.name = name;
    tempProject.description = desc;

    app.projects.push(tempProject);
    getProjects();
    setCookie();
}

function createNewRequest(projectId, phaseId){

}
