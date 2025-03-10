import * as React from "react";

import style from "./label.module.css";

interface LabelProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => (
    <label className={style.label}>
        {children}
    </label>
);

export { Label };
