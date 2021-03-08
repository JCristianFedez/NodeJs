import got from "got";
import { expect } from "chai";
import cheerio from "cheerio";

import server from "../src/";

describe("Test: Home", () => {
    beforeEach(() => {
        server.start();
    });

    afterEach(() => {
        server.close();
    });

    describe("Get /josemanuelrosa", () => {
        it("it should use a name spend by route" , async () => {
            const response = await got("http://localhost:9000");
            const $ = cheerio.load(response.body);
            expect($(".bf-title").text()).to.be.equal(`Bienvenido usuario josemanuelrosa`);
        })
    });
});