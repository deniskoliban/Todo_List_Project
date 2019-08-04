export class Task {
    task: string;
    status: Status;
    index: number;
}
// TODO: Перенести во отдельный файл
export enum Status {
    TODO = 'todo',
    IN_PROGRESS = 'inProgress',
    DONE = 'done'

}