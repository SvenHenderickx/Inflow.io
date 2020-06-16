const request_detail = Vue.component('request_detail', {
    props: ['request'],
    template: '<div><button class="closeButton"  v-on:click="closeDetail()">X</button><input class="inputLikeText title" v-model="request.title"></input><textarea placeholder="Hier komt de beschrijving van je data aanvraag." rows="3" cols="40" class="inputLikeText normal" v-model="request.description"></textarea><label>Waar wordt de data voor gebruikt?</label><label>Waarom willen we deze data gebruiken?</label></div>',
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
