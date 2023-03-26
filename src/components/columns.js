import ActionsEditOrDelete from "./ActionsEditOrDelete";
import Aldd from "./Aldd";

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
            <>
            <ActionsEditOrDelete props={props}/>
            
            </>
          )
    },
]