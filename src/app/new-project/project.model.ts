export class Project {
    public id: number;
    public contactName: string;
    public contactPhone: string;
    public contactEmail: string;
    public name: string;
    public description: string;
    public additional: string;
    public support: string;
    public deleted: boolean;
    public visible: boolean;
    public comments: string[];
    public firebaseId?: string;

    constructor(
        id: number,
        recipient_name: string, 
        recipient_phone: string, 
        recipient_email: string,
        name: string,
        description: string,
        additional: string,
        support: string){
            this.id = id;
            this.contactName = recipient_name;
            this.contactPhone = recipient_phone;
            this.contactEmail = recipient_email;
            this.name = name;
            this.description = description;
            this.additional = additional;
            this.support = support;
            this.deleted = false;
            this.visible = false;
            this.comments = [];
    }
}