export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}
// Compare this snippet from src\app\services\task.service.ts: