const contract = Vue.component('contract', {
    props: ['contract'],
    template: `
    <div class="contract">
        <h2 style="font-weight: bold;font-size: 25px; margin-bottom: 16px;">Digitaal contract</h2>
        <button class="closeButton" v-on:click="closeContract()">X</button>
        <textarea rows="15" columns="10" class="contracttext" v-model="contract.text"></textarea>
        <div>
            <input type="checkbox" id="checkbox" v-model="contract.is_signed"><label>Contract tekenen</label></br>
            <button class="buttonCta" v-on:click="closeContract()">Opslaan</button>
        </div>
    </div>`,
    computed: {

    },
    watch: {

    },
    methods:{
        closeContract:
        function(){
            this.$parent.showContract = false;
        }
    }
});
