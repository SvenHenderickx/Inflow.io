const contract = Vue.component('contract', {
    props: ['contract'],
    template: `
    <div class="contract">
        <h2 style="font-weight: bold;font-size: 25px; margin-bottom: 16px;">Digitaal contract</h2>
        <button class="closeButton" v-on:click="closeContract()">X</button>
        <textarea rows="15" columns="15" class="contracttext" v-model="contract.text"></textarea>
        <div>
            <input type="checkbox" id="checkbox" v-model="contract.is_signed"><label>Contract tekenen</label></br>
            <button v-if="this.hasTextChanged == false" class="buttonCta" v-on:click="closeContract()">Opslaan</button>
            <button v-if="this.hasTextChanged == true" class="buttonCta" v-on:click="closeContract()">Wijziging sturen</button>
        </div>
    </div>`,
    data() {
        return {
          textChanged: false,
          firstText: this.contract.text
        }
    },
    computed: {
        hasTextChanged:
        function(){
            if(this.textChanged && this.firstText != this.contract.text){
                return true;
            }
            else{
                return false;
            }
        }
    },
    watch: {
        'contract.text':
        function(){
            console.log('changed')
            this.textChanged = true;
        },
        deep: true
    },
    methods:{
        closeContract:
        function(){
            this.$parent.showContract = false;
        }
    }
});
