const projectpage = Vue.component('projectpage', {
    props: ['project','teams'],
    template: '<div class="project_tile">blablbal{{ project.name }}<p><b>{{ contact_name }} </b> + {{ team_name }}</p></div>',
    computed: {
        contact_name:
        function(){
            let out = this.getTeamObj(this.project.contact);
            return out.name;
        },
        team_name:
        function(){
            let out = this.getTeamObj(this.project.owner);
            return out.name;
        },
        url:
        function(){
            return 'projects.php?id=' + this.project.id;
        }
    },
    watch: {

    },
    methods:{
        getTeamObj:
        function(teamId){
            let projecttemp = this.project;
            let obj;
            $.each(this.teams, function(i,v){
                if(teamId == v.id){
                    obj = v;
                }
            })
            return obj;
        }
    }
});
