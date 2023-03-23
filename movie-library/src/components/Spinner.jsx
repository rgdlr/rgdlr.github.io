import { FaSpinner } from "react-icons/fa";
import style from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={style.spinner}>
            <FaSpinner className={style.spin} size={50} />
        </div>
    );
}
