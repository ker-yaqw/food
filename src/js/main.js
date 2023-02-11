import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 15000);
 
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    calc();
    forms(modalTimerId);
    slider();
    
});