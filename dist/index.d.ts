export declare function getAll(): Promise<{
    id: number;
    question: string;
}[]>;
export declare function getAnswerByQuestion(id: number): Promise<string>;
