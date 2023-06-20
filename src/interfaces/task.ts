export default interface test {
    id?: number,
    title: string,
    description: string,
    created_at: string,
    due_date: string,
    project: string,
    priority: string,
    color: string,
    section: string,
// eslint-disable-next-line semi
}

export interface iTask {
task: test
}
