import React from "react";
import "../styles/css/header.css";

const Header = () => {
    return (
        <header className="container">
            <div className="row">
                <div className="header-title">
                    <a href="index.html">multiDocs</a>
                </div>
                <div className="userInfo col-3">
                    <div className="userInfo-user">
                        <a href="">Cristiano</a>
                    </div>
                    <div className="userInfo-dropdown">
                        <button id="dropdownButton" className="dropdown">
                            <i
                                className="fa fa-ellipsis-v"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <div
                        id="dropdownContent"
                        className="dropdown-content hidden">
                        <a href="">Editar cadastro</a>
                        <a href="">Sair</a>
                    </div>
                </div>
            </div>

            <hr />

            <div className="header-menu">
                <button className="header-menuItem">
                    <a href="">Checklists</a>
                </button>
                <button className="header-menuItem">
                    <a href="">Documentos</a>
                </button>
                <button className="header-menuItem">
                    <a href="">Rotinas</a>
                </button>
            </div>
        </header>
    );
};

export default Header;
