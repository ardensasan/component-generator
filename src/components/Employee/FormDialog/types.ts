export interface Form{
    fields: Array<Field>,
    defaultFieldValues: any
    dialog: boolean
}

export interface Field{
    key: string
}