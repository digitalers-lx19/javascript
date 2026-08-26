import Gallery from "./Gallery.js";
import Clock from "./Clock.js";
import getData from "./xhr.js";
import { fetchData } from "./promise.js";
/** IIFE (Inmediatly Invoked Function Expression) */
(() => document.addEventListener('DOMContentLoaded', () => {
    Gallery();
    Clock();
    getData();
    fetchData();
}))()