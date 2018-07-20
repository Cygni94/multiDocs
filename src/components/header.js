import React from "react";
import "../styles/css/header.css";

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="header row">
                <div className="header__brand col-6 col-md-8">
                    <h1>multiDocs</h1>
                </div>
                <div className="header__userMenu col-6 col-md-4">
                    <h6>Cristiano Coelho</h6>
                </div>
            </div>
            <hr />
            <div className="submenu row">
                <div className="submenu__item">Checklists</div>
                <div className="submenu__item">Documentos</div>
                <div className="submenu__item">Rotinas</div>
            </div>
        </header>
    );
};

export default Header;
