import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export  class Settings{
    private static settings_instance: Settings;
    constructor(){}

    public static getInstance(){
        if(Settings.settings_instance == null){
            Settings.settings_instance = new Settings();
        }
        return Settings.settings_instance;
    }

    public static API_ENDPOINT = "https://localhost:44331";
    public static headers = new HttpHeaders({
        'Accept': '/',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': 'true'
    });
    public static httpOptions = {
        headers: Settings.headers.delete('Access-Control-Allow-Origin')
                                 .delete('Access-Control-Allow-Methods')
                                 .delete('Access-Control-Allow-Headers')
                                 .delete('Access-Control-Allow-Credentials')
    };

}