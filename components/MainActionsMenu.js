import {useContext} from "react";
import { NotesContext } from "../context/NotesContext";
import { LayoutContext } from "../context/LayoutContext";
import axios from "axios";
import { useRouter } from "next/router";

export default function MainActionsMenu(){
    const {addNewNote, viewTrashedNotes, setViewTrashedNotes} = useContext(NotesContext);
    const {darkMode, handleClickChangeDarkMode} = useContext(LayoutContext);

    const router = useRouter();

    const btnTheme = darkMode ? 'actionBtn__dark' : '';
    
    return(
        <>
        <menu className={`mainActionsMenu flex gap-4 justify-center items-center w-64 h-12 px-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <button onClick={addNewNote} className={`${btnTheme}`}>
                <i className="bi bi-journal-plus text-2xl"/>
            </button>

            <button onClick={()=>setViewTrashedNotes(!viewTrashedNotes)} className={`${btnTheme}`} title={"Trashed notes"}>
                <i className={`bi bi-trash3${viewTrashedNotes ? '-fill' : ''} text-2xl`}/>
            </button>

            <button onClick={handleClickChangeDarkMode} className={`${btnTheme}`} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                <i className={`${darkMode ? 'bi bi-sun-fill' : 'bi bi-moon'} text-2xl`}/>
            </button>

            <button onClick={()=>router.push('/settings')} className={`${btnTheme}`} >
                <i className="bi bi-gear text-2xl"/>
            </button>
            
        </menu>
        </>
    )
}