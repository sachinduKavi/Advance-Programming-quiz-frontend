interface MultiChoiceInterface {
    title: string
    description: string
    choices: Array<
        {
            choice: string,
            selected: boolean
        }
    >

    multiple: boolean
    required: boolean
    link: any
    placement: boolean
}

export default MultiChoiceInterface