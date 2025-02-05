var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, EventEmitter, Output, forwardRef, ChangeDetectorRef, KeyValueDiffers, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
var ɵ0 = [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return DateTimePickerDirective_1; }), multi: true }
];
var DateTimePickerDirective = (function () {
    function DateTimePickerDirective(changeDetector, el, differs) {
        this.changeDetector = changeDetector;
        this.el = el;
        this.differs = differs;
        this._options = {};
        this.onClick = new EventEmitter();
        this._onTouched = function () {
        };
        this._onChange = function () {
        };
        this.dpinitialized = false;
        var $parent = $(el.nativeElement.parentNode);
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }
    DateTimePickerDirective_1 = DateTimePickerDirective;
    Object.defineProperty(DateTimePickerDirective.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            if (value !== null) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    Object.defineProperty(DateTimePickerDirective.prototype, "value", {
        get: function () {
            return this._value || null;
        },
        set: function (val) {
            this._value = val;
            this._onChange(val);
            if (val) {
                this._onTouched();
            }
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerDirective.prototype.writeValue = function (value) {
        if (!value) {
            this.value = null;
        }
        this.value = value;
        this.setDpValue(value);
    };
    DateTimePickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DateTimePickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DateTimePickerDirective.prototype.setDpValue = function (val) {
        if (!this.dpinitialized) {
            return;
        }
        if (val) {
            this.datepicker.date(this.value);
        }
        else {
            this.datepicker.clear();
        }
    };
    DateTimePickerDirective.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this.datepicker.disable();
            return;
        }
        this.datepicker.enable();
    };
    DateTimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.dpinitialized = true;
        this.dpElement.datetimepicker(this.options);
        this.datepicker = this.dpElement.data('DateTimePicker');
        this.datepicker.date(this.value);
        this.dpElement.on('dp.change', function (e) {
            if (e.date !== _this.value) {
                _this.value = e.date || null;
            }
        });
        this.dpElement.on('click', function () { return _this.onClick.emit(); });
        this.optionsDiffer = this.differs.find(this.options).create();
    };
    DateTimePickerDirective.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.dpinitialized) {
            var changes = this.optionsDiffer.diff(this.options);
            if (changes) {
                $.map(this.options, function (value, key) {
                    _this.datepicker[key](value);
                });
            }
        }
    };
    DateTimePickerDirective.prototype.ngOnDestroy = function () {
        this.datepicker.destroy();
    };
    var DateTimePickerDirective_1;
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DateTimePickerDirective.prototype, "options", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DateTimePickerDirective.prototype, "onClick", void 0);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DateTimePickerDirective.prototype, "onBlur", null);
    DateTimePickerDirective = DateTimePickerDirective_1 = __decorate([
        Directive({
            selector: '[a2e-datetimepicker]',
            providers: ɵ0
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            ElementRef,
            KeyValueDiffers])
    ], DateTimePickerDirective);
    return DateTimePickerDirective;
}());
export { DateTimePickerDirective };
export { ɵ0 };
