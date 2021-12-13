export interface NewDialog{
    fields: Array<Field>,
    defaultFieldValues: any
    dialog: boolean
}

export interface Field{
    key: string
}