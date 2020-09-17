import React from "react";
import { render } from "@testing-library/react";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import {shallow} from 'enzyme';
import Main from "../components/Main";
import Footer from "../components/Footer";
import {Layout} from "antd";
import Header from "../components/Header";


// test("Render footer, header and main components", () => {
//     const { container } = render(
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     );
//
//     //Main
//     const main = container.querySelector(".main");
//     expect(main).not.toBe(null);
// });

test("Render footer, header and main components", () => {
    const container = shallow(<App />);

    expect(container.find(Main)).toHaveLength(1)
    expect(container.find(Footer)).toHaveLength(1)
    expect(container.find(Header)).toHaveLength(1)
});
