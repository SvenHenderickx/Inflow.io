const project_c = Vue.component('project_c', {
    props: ['project_in','teams'],
    template: '<div v-on:click="openProject()" class="project_tile"><a :href="url">{{ project_in.name }}</a><p><b>{{ contact_name }} </b> + test {{ team_name }}</p></div>',
    computed: {
        contact_name:
        function(){
            let out = this.getTeamObj(this.project_in.contact);
            return out.name;
        },
        team_name:
        function(){
            let out = this.getTeamObj(this.project_in.owner);
            return out.name;
        },
        url:
        function(){
            return 'projects.php?id=' + this.project_in.id;
        }
    },
    watch: {

    },
    methods:{
        getTeamObj:
        function(teamId){
            let projecttemp = this.project_in;
            let obj;
            $.each(this.teams, function(i,v){
                if(teamId == v.id){
                    obj = v;
                }
            })
            return obj;
        },
        openProject:
        function(){
            console.log('test')
        }
    }
});
