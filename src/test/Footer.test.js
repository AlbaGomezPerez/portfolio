import React from "react";
import { render } from "@testing-library/react";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import {shallow} from 'enzyme';
import Main from "../components/Main";
import Footer from "../components/Footer";
import {Layout} from "antd";


test("Footer is rendered", () => {
    const container = shallow(<Footer />);

    expect(container.find(Layout.Footer)).toHaveLength(1)
    expect(container.find(Layout.Footer).render().text()).toBe('Alba Gómez Pérez ©2020')
});
