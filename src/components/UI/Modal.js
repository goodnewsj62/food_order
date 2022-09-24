import ReactDOM  from "react-dom";
import styles from "./Modal.module.css";


const BackDropfunc = props =>{
    return <div onClick={props.onClick} className={styles.backdrop}></div>
} 

const ModalOverlay =  props =>{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

export default function Modal(props) {
    return(
        <>
            {ReactDOM.createPortal(<BackDropfunc {...props}/>, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ ModalOverlay>, document.getElementById("overlay"))}
        </>
    );
};