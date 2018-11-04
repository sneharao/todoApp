export class Todo {
    constructor(public todoName: string,
        public isComplete: boolean,
        public isEditing: boolean,
        public className?: string,
        public createdDate?: Date,
        public completedDate?: Date) {

    }

}

