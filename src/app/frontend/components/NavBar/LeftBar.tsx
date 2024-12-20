

import React from "react";
export default function LeftBar() {
    return (

        <div className="container mx-auto flex flex-col justify-between items-center p-4">
            <h1 className="text-white text-2xl">Logo</h1>
            <nav>
                <ul className="flex">
                    <li className="mx-2">
                        <a href="#" className="text-white">Inicio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#" className="text-white">Nosotros</a>
                    </li>
                    <li className="mx-2">
                        <a href="#" className="text-white">Servicios</a>
                    </li>
                    <li className="mx-2">
                        <a href="#" className="text-white">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>





    )

}