const request_detail = Vue.component('request_detail', {
    props: ['request'],
    template: '<div><input v-model="request.title"></input><button v-on:click="closeDetail()">Close</button></div>',
    computed: {

    },
    watch: {

    },
    methods:{
        closeDetail:
        function(){
            this.$parent.closeDetail();
        }
    }
});
