const request_detail = Vue.component('request_detail', {
    props: ['request'],
    template: '<div><button class="closeButton"  v-on:click="closeDetail()">X</button><input class="inputLikeText title" v-model="request.title"></input><textarea rows="3" cols="40" class="inputLikeText normal" v-model="request.description"></textarea></div>',
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
