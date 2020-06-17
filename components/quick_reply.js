const quick_reply = Vue.component('quick_reply', {
    props: ['request'],
    template: `
    <div v-if="request.status < 4">
        <button v-on:click="primaryButton()" class="primairy">{{ getCurrentText(1) }}</button>
        <button v-on:click="secondaryButton()" class="">{{ getCurrentText(2) }}</button>
    </div>
    `,
    computed: {

    },
    watch: {

    },
    data(){
        return {
            status: [
                {
                    id: 1,
                    desc: 'reageren op aanvraag',
                    in: {
                        first: {
                            text: 'Accepteren'
                        },
                        second: {
                            text: 'Weigeren'
                        }
                    },
                    out: {
                        first: {
                            text: 'Herinnering sturen'
                        },
                        second: {
                            text: 'Annuleren'
                        }
                    },
                },
                {
                    id: 2,
                    desc: 'Sturen van data',
                    in: {
                        first: {
                            text: 'Data aanleveren'
                        },
                        second: {
                            text: 'Probleem melden'
                        }
                    },
                    out: {
                        first: {
                            text: 'Herinnering sturen'
                        },
                        second: {
                            text: 'Annuleren'
                        }
                    },
                },
                {
                    id: 3,
                    desc: 'ALles klaar alleen nog accepteren',
                    in: {
                        first: {
                            text: 'Herinnering sturen'
                        },
                        second: {
                            text: 'Annuleren'
                        }
                    },
                    out: {
                        first: {
                            text: 'Data downloaden'
                        },
                        second: {
                            text: 'Probleem melden'
                        }
                    },
                }
            ]
        }
    },
    methods:{
        getCurrentText:
        function(position){
            let statusArr = this.status;
            let statusOut;
            let curStatus = this.request.status;
            $.each(statusArr, function(i,v){
                if(v.id == curStatus){
                    statusOut = v;
                }
            })

            if(this.request.origin_you == true){
                statusOut = statusOut.in
            }
            else{
                statusOut = statusOut.out
            }

            if(position == 1){
                return statusOut.first.text

            }
            else{
                return statusOut.second.text
            }
        },
        primaryButton:
        function(){
            if(this.request.status == 3){
                console.log('check status 3')
                this.$root.openDataOntvangenPopUp(this.request.id);
            }
            else{
                this.request.status++;
            }
        }
    }
});
