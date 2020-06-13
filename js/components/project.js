const project = Vue.component('project', {
    props: ['project','teams'],
    template: '<div class="project_tile"><a :href="url">{{ project.name }}</a><p v-bind="team_name"></p></div>',
    computed: {
        team_name:
        function(){
            let projecttemp = this.project;
            // console.log(projecttemp);
            $.each(this.teams, function(i,v){
                if(projecttemp.owner == v.id){
                    console.log(projecttemp.owner);
                    console.log(v.id);
                    console.log(v.name);
                    return v.name;
                }

            })
        },
        url:
        function(){
            return 'projects.php?id=' + this.project.id;
        }
    },
    watch: {

    },
    methods:{

    }
});
