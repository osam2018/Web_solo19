import Vue from 'vue'

export default class PublicBus extends Vue {

    public static _instance:PublicBus;

    public static getInstance(){
        if(PublicBus._instance==null){
            PublicBus._instance = new PublicBus();
        }

        return PublicBus._instance;
    }

}