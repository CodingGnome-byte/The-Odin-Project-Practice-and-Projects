import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import {describe, it, expect} from "vitest";

describe("Greeting", () => {
    it("renders a default greeting", () => {
        render(<Greeting />)
        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });

    it("renders greeting with a name" () => {
        )
});