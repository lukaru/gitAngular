export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) {}
}

export const ListFormErrorMessages = [
    new ErrorMessage('helped_id', 'required', 'Die eigene Id muss angegeben werden!'),
    new ErrorMessage('due_date', 'required', 'Es muss ein Datum angegeben werden!'),
    new ErrorMessage('comment_helped', 'maxlength', 'Ein Kommentar darf nicht mehr als 800 Zeichen umfassen.w'),
];


