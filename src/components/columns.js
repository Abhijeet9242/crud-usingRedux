import ActionsEditOrDelete from "./ActionsEditOrDelete"

export const COLUMNS = [
    {
        Header:"ID",
        accessor:"id"
    },
    {
        Header:"NAME",
        accessor:"name"
    },
    {
        Header:"EMAIL",
        accessor:"email"
    },
    {
        Header:"ACTIONS",
        Cell: (props) => (
            <ActionsEditOrDelete props={props}/>
          )
    },
]