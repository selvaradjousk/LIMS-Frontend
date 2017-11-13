import { inject, bindable, bindingMode, NewInstance } from 'aurelia-framework';
import { InventoryApi } from '../inventory/api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ValidationRules, ValidationController, validateTrigger } from 'aurelia-validation';
import { UiValidationRenderer } from '../components/semantic-ui/ui-validation-renderer';

@inject(InventoryApi, EventAggregator, NewInstance.of(ValidationController))
export class LlRestockAmount {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) toggle;
    @bindable source;

    constructor(inventoryApi, eventAggregator, validationController) {
        this.api = inventoryApi;
        this.ea = eventAggregator;

        this.validator = validationController;
        this.validator.validateTrigger = validateTrigger.changeOrBlur;
        this.validator.addRenderer(new UiValidationRenderer());

        this.transfer = {};

        ValidationRules
            .ensure('amount').required()
            .on(this.transfer)
    }

    sourceChanged() {
        if (this.source) {
            this.transfer.measure = this.source.amount_measure;
            this.transfer.is_addition = true;
            this.transfer.transfer_complete = true;
        }
    }

    save() {
        this.api.createTransfer(this.source.id, this.transfer).then(data => {
            this.ea.publish('inventoryItemUpdated', {source: 'transfer'});
            this.cancel();
        })
        .catch(err => {
            this.error = err;
        });
    }

    cancel() {
        this.transfer = {};
        this.error = null;
        this.toggle = false;
    }
}
