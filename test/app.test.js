const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('GET /playstore', () => {
    it('should return the full list if no query parameters are present', () => {
        return supertest(app)
        .get('/playstore')
        .expect(200)
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(10);
        })
    });

    it('should return 400 if no genre was picked but sort was', () => {
        return supertest(app)
        .get('/playstore')
        .query({ sort: "app", genre: "select"})
        .expect(400, 'You cannot sort without picking a genre');
    });

    it('should sort action genre by title', () => {
        return supertest(app)
        .get('/playstore')
        .query({ sort: "app", genre: "Action"})
        .expect(200)
        .then(res => {
            expect(res.body).to.deep.equal([{"App":"Helix Jump","Category":"GAME","Rating":4.2,"Reviews":"1497361","Size":"33M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"April 9, 2018","Current Ver":"1.0.6","Android Ver":"4.1 and up"},{"App":"Kick the Buddy","Category":"GAME","Rating":4.3,"Reviews":"1000417","Size":"Varies with device","Installs":"50,000,000+","Type":"Free","Price":"0","Content Rating":"Teen","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"Varies with device","Android Ver":"4.4 and up"},{"App":"ROBLOX","Category":"GAME","Rating":4.5,"Reviews":"4447388","Size":"67M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone 10+","Genres":"Adventure;Action & Adventure","Last Updated":"July 31, 2018","Current Ver":"2.347.225742","Android Ver":"4.1 and up"},{"App":"slither.io","Category":"GAME","Rating":4.4,"Reviews":"5234162","Size":"Varies with device","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"November 14, 2017","Current Ver":"Varies with device","Android Ver":"2.3 and up"},{"App":"Temple Run 2","Category":"GAME","Rating":4.3,"Reviews":"8118609","Size":"62M","Installs":"500,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"1.49.1","Android Ver":"4.0 and up"},{"App":"Zombie Hunter King","Category":"GAME","Rating":4.3,"Reviews":"10306","Size":"50M","Installs":"1,000,000+","Type":"Free","Price":"0","Content Rating":"Mature 17+","Genres":"Action","Last Updated":"August 1, 2018","Current Ver":"1.0.8","Android Ver":"2.3 and up"}]);
        })
    });

    it('should sort action genre by rating', () => {
        return supertest(app)
        .get('/playstore')
        .query({ sort: "rating", genre: "Action"})
        .expect(200)
        .then(res => {
            expect(res.body).to.deep.equal([{"App":"ROBLOX","Category":"GAME","Rating":4.5,"Reviews":"4447388","Size":"67M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone 10+","Genres":"Adventure;Action & Adventure","Last Updated":"July 31, 2018","Current Ver":"2.347.225742","Android Ver":"4.1 and up"},{"App":"slither.io","Category":"GAME","Rating":4.4,"Reviews":"5234162","Size":"Varies with device","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"November 14, 2017","Current Ver":"Varies with device","Android Ver":"2.3 and up"},{"App":"Temple Run 2","Category":"GAME","Rating":4.3,"Reviews":"8118609","Size":"62M","Installs":"500,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"1.49.1","Android Ver":"4.0 and up"},{"App":"Zombie Hunter King","Category":"GAME","Rating":4.3,"Reviews":"10306","Size":"50M","Installs":"1,000,000+","Type":"Free","Price":"0","Content Rating":"Mature 17+","Genres":"Action","Last Updated":"August 1, 2018","Current Ver":"1.0.8","Android Ver":"2.3 and up"},{"App":"Kick the Buddy","Category":"GAME","Rating":4.3,"Reviews":"1000417","Size":"Varies with device","Installs":"50,000,000+","Type":"Free","Price":"0","Content Rating":"Teen","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"Varies with device","Android Ver":"4.4 and up"},{"App":"Helix Jump","Category":"GAME","Rating":4.2,"Reviews":"1497361","Size":"33M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"April 9, 2018","Current Ver":"1.0.6","Android Ver":"4.1 and up"}]);
        })
    });

    it('should sort puzzle genre by title', () => {
        return supertest(app)
        .get('/playstore')
        .query({ sort: "app", genre: "Puzzle"})
        .expect(200)
        .then(res => {
            expect(res.body).to.deep.equal([{"App":"Block Puzzle","Category":"GAME","Rating":4.6,"Reviews":"59800","Size":"7.8M","Installs":"5,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Puzzle","Last Updated":"March 6, 2018","Current Ver":"2.9","Android Ver":"2.3 and up"},{"App":"Block Puzzle Classic Legend !","Category":"GAME","Rating":4.2,"Reviews":"17039","Size":"4.9M","Installs":"5,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Puzzle","Last Updated":"April 13, 2018","Current Ver":"2.9","Android Ver":"2.3.3 and up"}]);
        })
    });

    it('should sort puzzle genre by rating', () => {
        return supertest(app)
        .get('/playstore')
        .query({ sort: "rating", genre: "Puzzle"})
        .expect(200)
        .then(res => {
            expect(res.body).to.deep.equal([{"App":"Block Puzzle","Category":"GAME","Rating":4.6,"Reviews":"59800","Size":"7.8M","Installs":"5,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Puzzle","Last Updated":"March 6, 2018","Current Ver":"2.9","Android Ver":"2.3 and up"},{"App":"Block Puzzle Classic Legend !","Category":"GAME","Rating":4.2,"Reviews":"17039","Size":"4.9M","Installs":"5,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Puzzle","Last Updated":"April 13, 2018","Current Ver":"2.9","Android Ver":"2.3.3 and up"}]);
        })
    });
});