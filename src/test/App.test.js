import React from "react";
import App from "./../App";
import {shallow} from 'enzyme';
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";


test("Render footer, header and main components", () => {
    const container = shallow(<App />);
    expect(container.find(Main)).toHaveLength(1)
    expect(container.find(Footer)).toHaveLength(1)
    expect(container.find(Header)).toHaveLength(1)
});
