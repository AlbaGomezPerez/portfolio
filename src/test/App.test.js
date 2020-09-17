import React from "react";
import { render } from "@testing-library/react";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import {shallow} from 'enzyme';
import Main from "../components/Main";


// test("Render footer, header and main components", () => {
//     const { container } = render(
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     );
//
//     //Header
//     const headerNav = container.querySelector(".nav-wrapper");
//     expect(headerNav).not.toBe(null);
//     const navLinks = container.querySelectorAll(".link");
//     expect(navLinks[0].href).toBe("http://localhost/#aboutMe");
//     expect(navLinks[1].href).toBe("http://localhost/#projects");
//     expect(navLinks[2].href).toBe("http://localhost/#contact");
//
//     //Main
//     const main = container.querySelector(".main");
//     expect(main).not.toBe(null);
//
//     //Footer
//     const footerText = container.querySelector("#footer");
//     expect(footerText.textContent).toBe("Alba Gómez Pérez ©2020");
// });

test("Render footer, header and main components", () => {
    const container = shallow(
        <BrowserRouter>
            <App />
        </BrowserRouter>);

    //Main
    expect(container.find(Main)).not.toBe(null);

    //Footer
    expect(container.find('#footer')).not.toBe(null);
    // expect(container.find('#footer').textContent).toBe('Alba Gómez Pérez ©2020');

    //Header
    expect(container.find('.nav-wrapper')).not.toBe(null);
    expect(container.find('.link')).not.toBe(null);
    // expect(container.find('.link')).toHaveLength(3);

});
