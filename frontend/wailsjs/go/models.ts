export namespace variableincome {
	
	export class CreateVariableIncomeDto {
	    code: string;
	    negotiationCurrency: string;
	    unitValue: number;
	    quantity: number;
	    date: string;
	
	    static createFrom(source: any = {}) {
	        return new CreateVariableIncomeDto(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.code = source["code"];
	        this.negotiationCurrency = source["negotiationCurrency"];
	        this.unitValue = source["unitValue"];
	        this.quantity = source["quantity"];
	        this.date = source["date"];
	    }
	}

}

