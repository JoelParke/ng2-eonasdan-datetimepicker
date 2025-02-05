var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTimePickerDirective } from './datetimepicker.directive';
import * as i0 from "@angular/core";
var ɵ0 = [
    CommonModule,
    FormsModule
], ɵ1 = [DateTimePickerDirective];
var A2Edatetimepicker = (function () {
    function A2Edatetimepicker() {
    }
    A2Edatetimepicker.ngInjectorDef = i0.defineInjector({ factory: function A2Edatetimepicker_Factory() { return new A2Edatetimepicker(); }, providers: undefined, imports: [ɵ0, ɵ1] });
    A2Edatetimepicker = __decorate([
        NgModule({
            imports: ɵ0,
            declarations: [
                DateTimePickerDirective
            ],
            exports: ɵ1
        })
    ], A2Edatetimepicker);
    return A2Edatetimepicker;
}());
export { A2Edatetimepicker };
export { ɵ0, ɵ1 };
