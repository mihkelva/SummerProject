export class Project {
    public recipient_name: string;
    public recipient_phone: string;
    public recipient_email: string;
    public name: string;
    public description: string;
    public additional: string;
    public support: string;

    constructor(
        recipient_name: string, 
        recipient_phone: string, 
        recipient_email: string,
        name: string,
        description: string,
        additional: string,
        support: string){
            this.recipient_name = recipient_name;
            this.recipient_phone = recipient_phone;
            this.recipient_email = recipient_email;
            this.name = name;
            this.description = description;
            this.additional = additional;
            this.support = support;
    }
}