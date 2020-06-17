const contract = Vue.component('contract', {
    props: ['request'],
    template: `
    <div class="contract">
        <h2 style="font-weight: bold;font-size: 25px; margin-bottom: 16px;">Digitaal contract</h2>
        <button class="closeButton" v-on:click="closeContract()">X</button>
        <textarea v-if="request.origin_you" rows="15" columns="15" class="contracttext" v-model="request.contract.text"></textarea>
        <textarea v-if="!request.origin_you" rows="20" col="20" v-model="request.contract.text" class="modalTextarea" readonly="true"></textarea>
        <div>
            <input type="checkbox" id="checkbox" v-model="request.contract.is_signed"><label>Contract tekenen</label></br>
            <button v-if="this.hasTextChanged == false" class="buttonCta" v-on:click="closeContract()">Opslaan</button>
            <button v-if="this.hasTextChanged == true" class="buttonCta" v-on:click="closeContract()">Wijziging sturen</button>
        </div>
    </div>`,
    data() {
        return {
          textChanged: false,
          firstText: this.request.contract.text
        }
    },
    computed: {
        hasTextChanged:
        function(){
            if(this.textChanged && this.firstText != this.request.contract.text){
                return true;
            }
            else{
                return false;
            }
        }
    },
    watch: {
        'request.contract.text':
        function(){
            console.log('changed')
            this.textChanged = true;
        },
        deep: true
    },
    methods:{
        closeContract:
        function(){
            this.$root.showContract = false;
        }
    }
});
