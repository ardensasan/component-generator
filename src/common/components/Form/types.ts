export interface FormTypes{
    addItem?: Function,
    editItem?: Function,
    fields: Array<Field>,
    defaultDialogFields:any,
    type: "Edit" | "New"
}

export interface Field{
    key: string
}