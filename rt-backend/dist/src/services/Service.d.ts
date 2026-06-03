export declare const getTasks: () => Promise<any>;
export declare const createTask: (data: {
    title: string;
    priority: string;
}) => Promise<any>;
export declare const completeTask: (id: number) => Promise<any>;
export declare const deleteTask: (id: number) => Promise<any>;
