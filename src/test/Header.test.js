import React from "react";
import {mount} from 'enzyme';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {MemoryRouter} from "react-router";

test("Header component is rendered", () => {
    const container = mount(<MemoryRouter><Header /></MemoryRouter>);

    expect(container.find(Link)).toHaveLength(3)
    expect(container.find(Link).at(0).text()).toBe("Sobre mi")
    expect(container.find(Link).at(0).prop('to')).toBe("/#aboutMe")
    expect(container.find(Link).at(1).text()).toBe("Proyectos")
    expect(container.find(Link).at(1).prop('to')).toBe("/#projects")
    expect(container.find(Link).at(2).text()).toBe("Contacto")
    expect(container.find(Link).at(2).prop('to')).toBe("/#contact")

});
